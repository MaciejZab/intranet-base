<div class="bgimg w3-display-container w3-animate-opacity w3-text-dark-grey">

    <div class="w3-display-middle" id="result_content">
        <div class="w3-container w3-animate-top">

            <div class="w3-row w3-xxlarge">
                <form class="w3-container" method="post" action="" name="login" id="login">
                    <input type="hidden" id="user_logged" name="user_logged" value='0'>
                    <p>
                        <label><i class="fa fa-user">&nbsp;</i>Username</label>
                        <input class="w3-input w3-transparent-input-tl" type="text" id="username" name="username"
                            required>
                    </p>
                    <p>
                        <label><i class="fa fa-key">&nbsp;</i>Password</label>
                        <input class="w3-input w3-transparent-input-tl" type="password" id="password" name="password"
                            required>
                    </p>
                    <p>
                    <div class="w3-center"><button class="w3-btn w3-blue-tl" type="submit">
                            Sign In</button></div>
                    </p>
                </form>
                <form class="w3-container" method="post" action="" name="continue" id="continue">
                    <input type="hidden" id="user_logged" name="user_logged" value='0'>

                    <div class="w3-center"><button class="w3-btn w3-blue-tl" type="submit">
                            Proceed as operator</button></div>
                    </p>
                </form>
            </div>

        </div>
        <hr class="w3-border-grey" style="margin:auto;width:40%">

    </div>
    <div class="iso">
        <div>
            <img src="/Resources/Graphics/iso-new.png">
            <span>9001</span>
        </div>
        <div>
            <img src="/Resources/Graphics/iso-new.png">
            <span>14001</span>
        </div>
        <div>
            <img src="/Resources/Graphics/iso-new.png">
            <span>45001</span>
        </div>
        <div>
            <img src="/Resources/Graphics/iso-new.png">
            <span>27001</span>
        </div>
        <div>
            <img src="/Resources/Graphics/iso-new.png">
            <span>22301</span>
        </div>
        <div>
            <img src="/Resources/Graphics/rba-new.png">
            <span>Responsible Business Alliance</span>
        </div>
    </div>
</div>

<style>
    .iso {
        position: absolute;
        bottom: 0;

        display: flex;
        justify-content: center;
        width: 100%;
        gap: 50px;
        padding: 10px;
        color: #074383;
        font-weight: bold;
    }

    .iso div {

        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px;
        width: 100px;
    }

    .iso span {
        text-align: center;
    }

    .iso img {
        width: 100%;
    }

    @media (max-width: 1200px) {

        .iso {
            display: none;
        }
    }
</style>

<script type='module'>
    import { HttpRequest } from "/Utilities/Javascript/HttpRequest.js";

    document.querySelector('#login').addEventListener('submit', (event) => {
        const form = document.querySelector('#login');
        event.preventDefault();

        const data = {
            username: form.querySelector('#username').value,
            password: form.querySelector('#password').value,
        }

        const requestUrl = `/Controllers/User/log.php`;
        const request = new HttpRequest(requestUrl, "POST", data);
        request.send('json').then(response => {
            if (response.status === 200) window.location.href = '/home.php';
        });
    });
    document.querySelector('#continue').addEventListener('submit', (event) => {
        event.preventDefault();

        const data = {
            username: "operator",
            password: null,
        }

        const requestUrl = `/Controllers/User/log.php`;
        const request = new HttpRequest(requestUrl, "POST", data);
        request.send('json').then(response => {
            if (response.status === 200) window.location.href = '/home.php';
        });
    });

</script>

<script>

    document.getElementById('username').focus();
    // Change style of navbar on scroll
    window.onscroll = function () { myFunction() };
    function myFunction() {
        var navbar = document.getElementById("myNavbar");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
        } else {
            navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
        }
    }

    // Used to toggle the menu on small screens when clicking on the menu button
    function toggleFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
</script>