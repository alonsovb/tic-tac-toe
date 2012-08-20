<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="game.aspx.cs" Inherits="_3EnLinea.GameForm" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
    <div id="container">
        <div class="main">
            <h2>
                Gato</h2>
            <div id="game">
                <div id="board">
                </div>
                <div id="panel">
                    <div id="turn">
                        Turno del jugador X
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
