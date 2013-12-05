$(document).ready(function(){
$('#supplements-tabs div').hide();
$('#supplements-tabs div:first').show();
$('#supplements-tabs ul li:first').addClass('active');
 
$('#supplements-tabs ul li a').click(function(){
$('#supplements-tabs ul li').removeClass('active');
$(this).parent().addClass('active');
var currenttabs = $(this).attr('href');
$('#supplements-tabs div').hide();
$(currenttabs).show();
return false;
});
});

$(document).ready(function(){
$('#gym-tabs div').hide();
$('#gym-tabs div:first').show();
$('#gym-tabs ul li:first').addClass('active');
 
$('#gym-tabs ul li a').click(function(){
$('#gym-tabs ul li').removeClass('active');
$(this).parent().addClass('active');
var currentTab = $(this).attr('href');
$('#gym-tabs div').hide();
$(currentTab).show();
return false;
});
});

$(document).ready(function(){
$('#resources-tabs div').hide();
$('#resources-tabs div:first').show();
$('#resources-tabs ul li:first').addClass('active');
 
$('#resources-tabs ul li a').click(function(){
$('#resources-tabs ul li').removeClass('active');
$(this).parent().addClass('active');
var currentTab = $(this).attr('href');
$('#resources-tabs div').hide();
$(currentTab).show();
return false;
});
});