import React, { Component } from 'react';
import './header.css';
import './main.css';
import Superheroes from '../../superheroes.json';

const chooseUniverseBottom = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '89px',
  maxHeight: '89px',
  width: '100vw',
  bottom: '0px',
  left: '0px',
  position: 'fixed',
  zIndex: '10',
  backgroundColor: '#31333D'
};
const chooseUniverseRight = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '89px',
  maxHeight: '89px',
  width: '100vw',
  backgroundColor: 'transparent'
};

function removeChildren() {
  document.getElementsByClassName('searchBar')[0].value = '';
  var container = document.getElementsByClassName('chooseHeroes')[0];
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
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
  removeChildren();
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
function marvelHeroes() {
  removeChildren();
  Superheroes.marvel.forEach(function(elem) {
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

function searchHero() {
  let temp = document.getElementsByClassName("searchBar")[0].value.length-1;
  if(temp<0){temp=0;};
  let inpt = document.getElementsByClassName("searchBar")[0].value;
  if(inpt == undefined){inpt = ''};
  inpt.toUpperCase();
        document.getElementsByClassName('chooseHeroes')[0].childNodes.forEach(function() {
          if(i>=document.getElementsByClassName("cardFrame").length){i=0;};
          for(let tempI = 0; tempI < inpt.length; tempI++){
              if(
                document.getElementsByClassName("cardFrame")[i].id.charAt(tempI).toLowerCase() == inpt.charAt(tempI).toLowerCase()
                &&
                document.getElementsByClassName("cardFrame")[i].id.charAt(tempI-1).toLowerCase() == inpt.charAt(tempI-1).toLowerCase()
                &&
                document.getElementsByClassName("cardFrame")[i].id.charAt(tempI-2).toLowerCase() == inpt.charAt(tempI-2).toLowerCase()
              ){
                document.getElementsByClassName("cardFrame")[i].style.visibility='visible'
                document.getElementsByClassName("cardFrame")[i].style.position ='relative'
                document.getElementsByClassName("cardFrame")[i].style.justifyContent ='flex-start'
                document.getElementsByClassName("cardFrame")[i].style.marginLeft ='4px'
                document.getElementsByClassName("cardFrame")[i].style.marginRight ='4px'
              } else {
                document.getElementsByClassName("cardFrame")[i].style.visibility='hidden'
                document.getElementsByClassName("cardFrame")[i].style.position='absolute'
              };
            };
          if(inpt == '')
          {document.getElementsByClassName("cardFrame")[i].style.visibility='visible'
          document.getElementsByClassName("cardFrame")[i].style.position='relative'
          document.getElementsByClassName("cardFrame")[i].style.margin ='auto'
        };
          i++;
        });
};

class Main extends Component {

constructor(props) 
{
  super(props);
  var width = window.innerWidth;
  this.state = {};
  if (width > 767) {
    this.state.renderComponent = (
      <div className="container">
        <div className="App-header" id="App-header">
          <p className="emptyText">Выберите героя</p>
          <div className="shadowRight"></div>
        </div>
        <div className="App-body">
          <div className="search-body">
            <input type="search" onInput={searchHero} className="searchBar" placeholder="Имя героя"></input>
            <div className="searchImage"></div>
            <div className="chooseUniverse" id="chooseUniverse" style={chooseUniverseRight}>
              <div className="dcImage" onClick={dcHeroes}></div>
              <div className="marvelImage" onClick={marvelHeroes}></div>
            </div>
          </div>
          <div id="chooseHeroes" className="chooseHeroes"></div>
        </div>
      </div>
    );
  } else {
    this.state.renderComponent = (
      <div className="container">
      <div className="App-header" id="App-header">
        <p className="emptyText">Выберите героя</p>
        <div className="shadowRight"></div>
      </div>
        <div className="App-body">
          <div className="search-body">
            <input type="search" onInput={searchHero} className="searchBar" placeholder="Имя героя"></input>
            <div className="searchImage"></div>
          </div>
            <div id="chooseHeroes" className="chooseHeroes"></div>
            <div className="chooseUniverse" id="chooseUniverse" style={chooseUniverseBottom}>
              <div className="dcImage" onClick={dcHeroes}></div>
              <div className="marvelImage" onClick={marvelHeroes}></div>
          </div>
        </div> 
      </div>
    );
  }
}
  render() {
    return this.state.renderComponent;
  }
};


export default Main;