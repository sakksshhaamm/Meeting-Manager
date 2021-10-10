*{
  padding: 0px;
  margin: 0px;
}
@font-face {font-family: "Kaleko205RoundW01-Book"; src: url("//db.onlinewebfonts.com/t/aa89b0d6377f6c3c70119e3582005446.eot"); src: url("//db.onlinewebfonts.com/t/aa89b0d6377f6c3c70119e3582005446.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/aa89b0d6377f6c3c70119e3582005446.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/aa89b0d6377f6c3c70119e3582005446.woff") format("woff"), url("//db.onlinewebfonts.com/t/aa89b0d6377f6c3c70119e3582005446.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/aa89b0d6377f6c3c70119e3582005446.svg#Kaleko205RoundW01-Book") format("svg"); }
html{
  height: 100%;
  width: 100%;
}
body{
  height: 100%;
  widt…
[19:04, 10/10/2021] Saksham: // Created by Satyam Mishra UI [Less active]

alert('Zoom Beta 0.5')
var firstClick = 0;
function toggleMode(){
  $('body').toggleClass('mid-dark');
  $('body').toggleClass('white');
  $('.head').toggleClass('mid-dark');
  $('.bottom-bar').toggleClass('dark-dark');
  $('.bottom-bar').toggleClass('grey');
  $('.search-box').toggleClass('grey');
  $('.btn-2').toggleClass('light-dark');
  $('.btn-2').toggleClass('white');
  if(document.body.classList[1] === 'white'){
    $('.bottom-tab-1').css('color','rgb(180, 180, 180)');
    $('.bottom-tab-1.current-tab').css('color','white');
    $('.table-grp table tr td').css('background-color', 'rgb(56, 56, 56)');
    $('#settings').css('background-color', 'rgb(36,36,36)');
    document.getElementById('modeBtn').innerText = 'Light Mode';
    document.getElementById('toast').style.display = 'none';
  }else{
    $('.bottom-tab-1').css('color','rgb(0, 0, 0)');
    $('.bottom-tab-1.current-tab').css('color','rgb(14, 114, 236');
    $('.table-grp table tr td').css('background-color', 'rgb(255, 255, 255)');
    $('#settings').css('background-color', 'rgb(245,245,245)')
    document.getElementById('modeBtn').innerText = 'Dark Mode';
  }
}

var headHt;
document.addEventListener('click', function(){
  headHt = document.getElementsByClassName('head')[0].offsetHeight;
  
})
window.addEventListener('resize', function(){
  vAlign('#contacts-wizard');
})
function vAlign(elem){
  $(elem).css('margin-top', (parseInt(('-'+$(elem).css('height')).replace('px',''))/2)+'px');
}
function onload(){
  vAlign('#contacts-wizard');
  $('.table-grp table tr td').css('background-color', 'rgb(255, 255, 255)');
      $('.bottom-tab-1').on('click', function(){
       
      var tabs = document.getElementsByClassName('bottom-tab-1');
      var newTab=0;
      for(i=0; i<tabs.length; i++){
        tabs[i].classList.remove('current-tab');
        if(this==tabs[i]){
          newTab = i;
        }
      }
      if(newTab<4){
        tabs[newTab].classList.add('current-tab');
        tabs[newTab+4].classList.add('current-tab');
      }else{
        tabs[newTab].classList.add('current-tab');
        tabs[newTab-4].classList.add('current-tab');
      }
      $('#meet-and-chat').css('display','none');
      $('#meetings').css('display','none');
      $('#contacts').css('display','none');
      $('#settings').css('display','none');
      var tabName = '';
      switch(newTab){
        case 0 :
        case 4 : tabName = '#meet-and-chat';
                 break;
        case 1 :
        case 5 : tabName = '#meetings';
                 break;
        case 2 :
        case 6 : tabName = '#contacts';
                 break;
        case 3 :
        case 7 : tabName = '#settings';
                 break;
      }
      $(tabName).css('display','block');
      if(tabName == '#settings'){
        if(firstClick==0){
          $('#toast').css('display','flex');
          ++firstClick;
        }
      }else{
        $('#toast').css('display','none');
      }
    });
    $('.bottom-tab-2').on('click', function(){
      var tabs = document.getElementsByClassName('bottom-tab-2');
      $('#contacts-space').css('display','none');
      $('#channels-space').css('display','none');
      tabs[0].classList.remove('current-tab');
      tabs[1].classList.remove('current-tab');
      if(this == tabs[0]){
        tabs[0].classList.add('current-tab');
        $('#contacts-space').css('display','block');
        $('.search-bar:nth-child(1)').attr('placeholder', "Search Contacts");
      }else if(this == tabs[1]){
        tabs[1].classList.add('current-tab');
        $('#channels-space').css('display','block');
        $('.search-bar:nth-child(1)').attr('placeholder', "Search Channels");
      }
      
    });
    document.getElementById('loader').style.display = 'none';
}

function toggleWizard(elem){
  $('#underlay').toggle();
  $(elem).toggle();
}
document.addEventListener('click', function(evt){
  if(document.body.classList[1] === 'white'){
    $('.bottom-tab-1').css('color','rgb(180, 180, 180)');
    $('.bottom-tab-1.current-tab').css('color','white');
  }else{
    $('.bottom-tab-1').css('color','rgb(0, 0, 0)');
    $('.bottom-tab-1.current-tab').css('color','rgb(14, 114, 236');
  }
  var el = evt.target.id;
  if(el=="underlay"){
    evt.target.style.display = 'none';
    $('.wizard').css('display','none');
  }
})