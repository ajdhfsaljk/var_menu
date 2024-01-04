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
                window.skip(prompt('score?'))
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

// UI stuff
function createPanel(options) {
    options = Object.assign({
        title: 'Window Panel',
        width: '300px',
        height: '200px',
        content: 'This is the content of the panel.',
        draggable: true,
        resizable: true,
    }, options);

    const panelContainer = document.createElement('div');
    panelContainer.className = 'panel-container';
    document.body.appendChild(panelContainer);

    const rootStyles = `
        --panel-bg-color: #008080;
        --title-bar-bg-color: #008080;
        --panel-text-color: #ffffff;
    `;

    panelContainer.style = `
        ${rootStyles}
        position: fixed;
        top: 10px;
        right: 10px;
        max-width: 300px;
        max-height: 200px;
        min-height: 120px;
        width: ${options.width};
        height: ${options.height};
        border: 2px solid #000000;
        overflow: hidden;
        font-family: 'Arial', sans-serif;
        z-index: 9999;
        color: var(--panel-text-color);
        background-color: var(--panel-bg-color);
    `;

    createTitleBar();
    createContentArea(options.content);

    if (options.draggable) {
        makeDraggable();
    }

    if (options.resizable) {
        makeResizable();
    }

    function createTitleBar() {
        const titleBar = document.createElement('div');
        titleBar.className = 'panel-title-bar';
        titleBar.style = `
            background-color: var(--title-bar-bg-color);
            padding: 2px;
            cursor: ${options.draggable ? 'move' : 'default'};
            user-select: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

        const titleText = document.createElement('div');
        titleText.innerHTML = options.title;
        titleText.style = `
            padding: 2px 4px;
            font-weight: bold;
        `;
        titleBar.appendChild(titleText);

        panelContainer.appendChild(titleBar);

        if (options.draggable) {
            const closeButton = createButton('×', () => {
                panelContainer.style.display = 'none';
            });

            titleBar.appendChild(closeButton);
        }
    }

    function createButton(text, onClick) {
        const button = document.createElement('div');
        button.className = 'panel-button';
        button.style = `
            cursor: pointer;
            font-size: 14px;
            line-height: 1;
            margin: 0 2px;
            padding: 1px 3px;
            border: 1px solid #000000;
            background-color: #d4d0c8;
            color: #000000;
        `;
        button.innerHTML = text;
        button.addEventListener('click', onClick);
        return button;
    }

    function makeDraggable() {
        let isDragging = false;
        let offsetX, offsetY;
        let panelRect;

        const titleBar = panelContainer.querySelector('.panel-title-bar');
        if (titleBar) {
            titleBar.addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX = e.clientX - panelContainer.getBoundingClientRect().left;
                offsetY = e.clientY - panelContainer.getBoundingClientRect().top;
                panelRect = panelContainer.getBoundingClientRect();
            });
        }

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const newLeft = e.clientX - offsetX;
                const newTop = e.clientY - offsetY;

                // Ensure the panel doesn't go outside the viewport
                if (newLeft >= 0 && newTop >= 0 && newLeft + panelRect.width <= window.innerWidth && newTop + panelRect.height <= window.innerHeight) {
                    panelContainer.style.left = newLeft + 'px';
                    panelContainer.style.top = newTop + 'px';
                }
            }
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                panelRect = null;
            }
        });
    }

    function makeResizable() {
        // ... (unchanged)
    }

    function createContentArea(content) {
        const contentArea = document.createElement('div');
        contentArea.innerHTML = content;
        contentArea.className = 'panel-content';
        contentArea.style = `
            padding: 2px;
            height: 85%;
            display: flex;
            flex-direction: column;
            background-color: #ffffff;
            color: #000000;
        `;

        panelContainer.appendChild(contentArea);
        panelContainer.contentArea = contentArea;
    }

    function setContent(content) {
        const contentArea = panelContainer.querySelector('.panel-content');
        if (contentArea) {
            contentArea.innerHTML = typeof content === 'string' ? content : '';
            contentArea.appendChild(content instanceof HTMLElement ? content : null);
        }
    }

    function addContent(content) {
        const contentArea = panelContainer.querySelector('.panel-content');
        if (contentArea) {
            contentArea.appendChild(content);
        }
    }

    return {
        setContent,
        addContent,
        contentArea: panelContainer.contentArea,
    };
}

function addCSS(css) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

addCSS(`
    .panel-button:hover {
        background-color: #c0c0c0;
    }
`);

createPanel({
    title: 'Windows 95 v0.1',
    width: '300px',
    height: '200px',
    content:'<button class="panelButton" id="skip-button">Skip lesson</button><br><button class="panelButton" id="all-perms-button">All Permissions</button>',
    draggable: true,
    resizable: true,
})

window.document.getElementById("all-perms-button").addEventListener("click", ()=> {
    enableAllPerms()
})



