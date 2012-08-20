<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="index.aspx.cs" Inherits="_3EnLinea.MenuForm" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <div id="container">
        <form runat="server" class="main">
        <h2>
            Iniciar juego</h2>
        <asp:Button ID="StartPvP" runat="server" Text="Iniciar Jugador vs. Jugador" 
            onclick="NTStartPvP"  />
        </form>
    </div>
</asp:Content>
