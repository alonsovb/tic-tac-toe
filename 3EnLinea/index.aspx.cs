using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace _3EnLinea
{
    public partial class MenuForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void NTStartPvP(object sender, EventArgs e)
        {
            Response.Redirect("/game.aspx");
        }
    }
}