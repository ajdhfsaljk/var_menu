/*
DONT USE ANY ` IN THE CODE UNTIL CONVERSION TOOL IS DONE
*/


// hooks componentComplete and makes it global under skip
(()=> {
    let objKeys = Object.keys;
    let hook;
    Object.keys = function () {
        if (arguments[0]?.componentComplete) {
            window.skip = arguments[0].componentComplete
            window.document.getElementById("skip-button").addEventListener("click", ()=> {
                window.skip(100);
            })
        }
        return objKeys.apply(this, arguments);
    };
  })()

  function enableAllPerms() {
    let privileges = Object.values(document.getElementById('StudentDashboard-g38'))[1].children[2]._owner.stateNode.props.securityContext.privileges
    Object.keys(privileges).forEach(function(key, value) {
        return privileges[key] = true;
    })
  
    // refresh dash
    Object.values(document.getElementById("StudentDashboard-g38"))[1].children[0]._owner.stateNode.props.navigateToPage('features/dashboard/SELECT_SUBJECT')
  }
  
  
  //UI
  const div = document.createElement("div");
  div.id = "GUI";
  div.className = "GUI";
  div.style.position = "fixed";
  div.style.top = "475px";
  div.style.left = "381px";
  div.style.transform = "translate(-50%, -50%)";
  div.style.outline = "gray solid 2px";
  div.style.height = "260px";
  div.style.width = "150px";
  div.style.opacity = "0.85";
  div.style.fontFamily = "sans-serif";
  div.style.background = "black";
  div.style.borderRadius = "5px";
  div.style.display = "grid";
  div.style.placeItems = "center";
  div.style.color = "white";
  div.style.fontSize = "larger";
  div.style.zIndex = "99999";
  div.style.cursor = "move";
  
  const img = document.createElement("img");
  img.id = "nullicon";
  img.className = "center";
  img.src = 'data:image/png;base64,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';
  div.appendChild(img);
  
  const h1 = document.createElement("h1");
  h1.className = "title";
  h1.innerHTML = "<center>Nullify</center>";
  div.appendChild(h1);
  
  const skipButton = document.createElement("button");
  skipButton.id = "skip-button";
  skipButton.className = "button";
  skipButton.innerHTML = "Skip Lesson";
  div.appendChild(skipButton);
  
  const allpermsButton = document.createElement("button");
  allpermsButton.id = "all-perms-button";
  allpermsButton.className = "button";
  allpermsButton.innerHTML = "All Permissions";
  div.appendChild(allpermsButton);
  
  const discordButton = document.createElement("button");
  discordButton.id = "discord";
  discordButton.className = "button";
  discordButton.innerHTML = "Discord";
  div.appendChild(discordButton);
  
  const gamesButton = document.createElement("button");
  gamesButton.id = "free-games";
  gamesButton.className = "button";
  gamesButton.innerHTML = "Free Games";
  div.appendChild(gamesButton);
  
  
  const style = document.createElement("style");
  style.id = "bruh";
  style.innerHTML = `
  
    .title {
      font-family: 'Nunito', sans-serif;
      font-size: 30px;
      color: white;
    }
      
    .button {
      font-family: 'Nunito', sans-serif;
      border: none;
      border-radius: 5px;
      color: white;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      transition-duration: 0.4s;
      width: 100%;
      text-align: center;
      color: white; 
      background-color: black;
    }
      
    .button:hover {
      color: black;
      background-color: grey;
    }
      
    .button:active {
      background-color: black;
    }
  
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  `;
  div.appendChild(style);
  
  document.body.appendChild(div);
  
  // Make the GUI draggable
  let isDragging = false;
  let mouseOffsetX = 0;
  let mouseOffsetY = 0;
  
  div.addEventListener('mousedown', (event) => {
    isDragging = true;
    mouseOffsetX = event.clientX - div.offsetLeft;
    mouseOffsetY = event.clientY - div.offsetTop;
  });
  
  div.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  div.addEventListener('mousemove', (event) => {
    if (isDragging) {
      div.style.left = (event.clientX - mouseOffsetX) + 'px';
      div.style.top = (event.clientY - mouseOffsetY) + 'px';
    }
  });
  
  window.document.getElementById("all-perms-button").addEventListener("click", ()=> {
    enableAllPerms()
  })
  
  window.document.getElementById("discord").addEventListener("click", ()=> {   
    window.open('https://discord.gg/eTpFvdmS6v', '_blank');
  })
  
  window.document.getElementById("free-games").addEventListener("click", ()=> {   
    window.open('https://docs.google.com/document/d/1w-uay3y5pwOm45sG9JqiSopKH9DO3pejABpUPBL-uiw/edit', '_blank');
  })
  
  var nullify = document.createElement("div");
      (nullify.style.cssText =
        "position: fixed; bottom: 10px; width: 100%; color: white; font-size: 12px; text-align: center;"),
        (nullify.textContent = "SKID Menu Created by @varcreatefunction on Discord"),
        document.body.appendChild(nullify)
  
        let uiVisible = true;

      window.addEventListener("keydown", (event) => {
        if (event.code === "ShiftRight") {
          if (uiVisible) {
            div.style.display = "none";
          } else {
            div.style.display = "grid";
          }
          uiVisible = !uiVisible;
        }
      });
