using NUnit.Framework;
using ProjectAllotmentHUB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectAllotmentHUB.HelperClass
{
    public class DbOperations
    {
        public static string ValidateLogin(string username, string password, out Stream user)
        {
            try
            {
                using (ProjectAllocationDBEntities entity = new ProjectAllocationDBEntities())
                {
                    user = entity.Streams.Where(u => u.Username == username).FirstOrDefault();
                    var hashPass = Hashing.Hash(password);
                    if (user != null)
                    {
                        if (string.Compare((hashPass), user.Password) == 0)
                        {
                            LogFile.LoginLog(user);
                            return "Success";

                        }
                        else
                        {
                            user = null;
                            return "Incorrect Password";
                        }
                    }
                    else
                    {
                        user = null;
                        return "Invalid Credentials";
                    }
                }
            }
            catch (Exception ex)
            {
                LogFile.WriteLog(ex);
                user = null;
                return "Unable to connect to server!";

            }
        }

    }
}