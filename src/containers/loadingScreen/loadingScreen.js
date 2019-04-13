import React, { Component } from 'react';
import './loadingScreen.css';
import Superheroes from '../../superheroes.json';

function hideIt() { 
  document.getElementById('loadingScreen').style.opacity = '0';
  document.getElementById('loadingScreen').style.transition = '2s';
};
function makeClick() {
  document.getElementById('loadingScreen').style.pointerEvents = 'none';
};
function deleteIt() {
  document.getElementById('loadingScreen').remove();
};
function emptyTextVisibility(elem) {
  if(document.getElementsByClassName('App-header')[0].childNodes.length > 2){
    if(document.getElementById(elem.name+"Top").childNodes[1].childNodes[0].innerHTML < 3) {
      document.getElementById(elem.name+'Counter').style.visibility='hidden';
    };
    document.getElementById(elem.name+"Top").childNodes[1].childNodes[0].innerHTML--;
    if(document.getElementById(elem.name+"Top").childNodes[1].childNodes[0].innerHTML == 0) {
      document.getElementById(elem.name+"Top").remove();
      if(document.getElementsByClassName('App-header')[0].childNodes.length == 2){
      document.getElementsByClassName('emptyText')[0].style.width = '135px';
      document.getElementsByClassName('emptyText')[0].style.visibility = 'visible';
      document.getElementsByClassName('emptyText')[0].style.margin = 'auto'; 
      };      
    };
    };
};
var i = 0;
function addHero(elem) {
var cloneArray = new Array(document.getElementsByClassName('App-header')[0].childNodes.length-1);
  document.getElementsByClassName('emptyText')[0].style.width = '0px';
  document.getElementsByClassName('emptyText')[0].style.visibility='hidden';
  document.getElementsByClassName('emptyText')[0].style.margin='0px';
  var nodeTop = document.createElement("div");
    nodeTop.className = "cardFrameTop";
    nodeTop.setAttribute("id",elem.name+"Top");
    document.getElementsByClassName('App-header')[0].appendChild(nodeTop);
  var removeHero = document.createElement("div");
    removeHero.className = "removeHero";
    removeHero.onclick = function(){emptyTextVisibility(elem)};
    document.getElementById(elem.name+"Top").appendChild(removeHero);
  var heroCounter = document.createElement("div");
    heroCounter.className = "heroCounter";
    heroCounter.setAttribute("id",elem.name+"Counter");
    document.getElementById(elem.name+"Top").appendChild(heroCounter);
  var heroCounterNum = document.createElement("div");
  heroCounterNum.className = "heroCounterNum";
  heroCounterNum.setAttribute("id",elem.name+"CounterNum");
    document.getElementById(elem.name+"Counter").appendChild(heroCounterNum);
  var innerImg = document.createElement("img");
    innerImg.className = "heroCardTop";
    innerImg.setAttribute("src",elem.image);
    document.getElementById(elem.name+"Top").appendChild(innerImg);
if(document.getElementsByClassName('App-header')[0].childNodes.length > 2){
    i = 1;
    while (i < document.getElementsByClassName('App-header')[0].childNodes.length) {
    cloneArray[i-1] = 1;
    cloneArray.length = document.getElementsByClassName('App-header')[0].childNodes.length - 1;
    cloneArray[i-1]++;
    if(document.getElementsByClassName('App-header')[0].lastChild.id == 
    document.getElementsByClassName('App-header')[0].childNodes[i-1].id){
      if(cloneArray[i-1] > 1){
        document.getElementsByClassName('App-header')[0].removeChild(
          document.getElementsByClassName('App-header')[0].lastChild
          );
      }
    }
    i++;
    }
    }
    i = 0;
    document.getElementsByClassName('App-header')[0].childNodes.forEach(function(){
      if(document.getElementsByClassName('App-header')[0].childNodes[i].childNodes.length > 3){
        while(document.getElementsByClassName('App-header')[0].childNodes[i].childNodes.length > 3) {
          document.getElementsByClassName('App-header')[0].childNodes[i].lastChild.remove();
        }
        };
      if(document.getElementsByClassName('heroCounter')[0].childNodes.length > 1){
      while(document.getElementsByClassName('heroCounter')[0].childNodes.length > 1) {
        document.getElementsByClassName('heroCounter')[0].lastChild.remove();
      }
      };
      i++;
});

if(document.getElementsByClassName('App-header')[0].childNodes.length > 2){
  document.getElementById(elem.name+"Top").childNodes[1].childNodes[0].innerHTML++;
};
if(document.getElementById(elem.name+"Top").childNodes[1].childNodes[0].innerHTML >= 2) {
  document.getElementById(elem.name+'Counter').style.visibility='visible';
};
    i = 0;
};
  function dcHeroes() {
    Superheroes.dc.forEach(function(elem) {
      var node = document.createElement("div");
        node.className = "cardFrame";
        node.setAttribute("id",elem.name);
        node.onclick = function(){addHero(elem)};
      document.getElementsByClassName('chooseHeroes')[0].appendChild(node);
      var innerImg = document.createElement("img");
        innerImg.className = "heroCard";
        innerImg.setAttribute("src",elem.image);
      document.getElementById(elem.name).appendChild(innerImg);
      var innerText = document.createElement("div");
        innerText.className = "heroName";
        innerText.setAttribute("id",i);
      document.getElementById(elem.name).appendChild(innerText);
      document.getElementById(i).innerHTML = elem.name;
      i++;
    });
    i = 0;
  };
window.onload = function(){
  setTimeout(function(){
    dcHeroes();
    hideIt();
    setTimeout(function(){
      makeClick();
      setTimeout(function(){
        deleteIt();
      }, 2000);
    }, 1000);
  }, 1000);
 };
 

class Footer extends Component {
  render() {
    return (
      <div id="loadingImage"></div>
    );
  }
};

export default Footer;
