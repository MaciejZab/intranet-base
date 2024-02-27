<style>
    div#frame {
        background: url('/Resources/Graphics/cork2.jpg') no-repeat;
        width: calc(100vw - 250px -35px);
        height: 100%;
        padding: 35px;
        margin: 35px;
        background-size: cover;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
        -moz-box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
        box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);

        /* Grid layout styles */
        display: flex;
        flex-wrap: wrap;
        /* Allow flex items to wrap to the next line if necessary */
        gap: 35px;
    }

    div#frame .frame-item a {
        text-decoration: none;
    }

    div#frame>*:nth-child(n + 7) {
        display: none;
    }

    .frame-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .note {
        max-width: 25vw;
        height: 250px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
        -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
        -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
        float: left;
        margin: 8px;
        border: 1px solid rgba(0, 0, 0, .25);
        scale: 1;

        @media screen and (max-width: 767px) {
            max-width: 100%;
            /* Set max-width to 100% for screens up to 767px wide */
        }
    }

    .note .svg-container {
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 12px;
    }

    .note .date-container {
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-size: 12px;
    }

    .note .title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        /* number of lines to show */
        line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .note .description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        /* number of lines to show */
        line-clamp: 7;
        -webkit-box-orient: vertical;
    }

    .note .pin {
        position: absolute;
        right: 50%;
        top: 2px;
        transform: translateX(50%);

        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #be4d25;
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3) inset, 0 0 4px rgba(0, 0, 0, 0.2);

    }


    .text {
        margin: 10px;
        margin-top: 20px;
        font-family: 'The Girl Next Door', cursive;
    }

    .click:hover {
        border: 1px solid rgba(0, 0, 0, .75);
        scale: 1.05;
        cursor: pointer;
    }

    div#frame {
        flex: 1;
    }

    .divider {
        flex: 0;
    }
</style>

<div id='frame'>

</div>

<script type='module'>
    import { HttpRequest } from "/Utilities/Javascript/HttpRequest.js";


    const requestUrl = `/Controllers/notes.php`;

    const request = new HttpRequest(requestUrl, "GET");
    request.send().then(notes => {
        const data = notes.data;
        const frame = document.querySelector('#frame');
        const frameHTMLArray = [];

        const noteLinkSvg = `<div class="svg-container"> Click me! 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                    </svg>
                </div>`;


        for (const note of notes.data) {

            const noteLink = `<a href="${note.note_link}"`;

            const noteTemplate = `
            <div class="frame-item">
                ${note.note_link ? noteLink : '<div '} class="note sticky ${note.note_link ? 'click' : ''}">
                    <div class='pin'></div>
                    <div class='text'>
                        <div class="title">${note.note_title}</div>
                        <div class="description">${note.note_description}</div>
                        ${note.note_link ? noteLinkSvg : ''}
                        <div class="date-container">date: ${note.note_date}</div>
                    </div>
                ${note.note_link ? '</a>' : '</div>'}
            </div>
            `;

            frameHTMLArray.push(noteTemplate);
        }

        frame.innerHTML = frameHTMLArray.join('');

        const stickyElements = document.querySelectorAll('.sticky');

        const generatePastelColor = () => {
            let R = Math.floor((Math.random() * 127) + 127);
            let G = Math.floor((Math.random() * 127) + 127);
            let B = Math.floor((Math.random() * 127) + 127);

            let rgb = (R << 16) + (G << 8) + B;
            return `#${rgb.toString(16)}`;
        }

        function getRandomRotation() {
            // Generate a random rotation between -5 and 5 degrees.
            return Math.random() * 10 - 5;
        }

        stickyElements.forEach(element => {
            element.style.backgroundColor = generatePastelColor();
            element.style.transform = `rotate(${getRandomRotation()}deg)`;
            element.style.webkitTransform = `rotate(${getRandomRotation()}deg)`;
            element.style.mozTransform = `rotate(${getRandomRotation()}deg)`;
        });
    });





</script>