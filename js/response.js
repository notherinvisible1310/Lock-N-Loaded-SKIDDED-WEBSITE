const inviteButton = document.getElementById('InviteButton');

inviteButton.addEventListener('click', function() {
  window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1103964690498998274&permissions=8&scope=bot";
});

const supp = document.getElementById('SupportButton');

supp.addEventListener('click', function() {
  window.location.href = "https://discord.gg/lnlhq";
});