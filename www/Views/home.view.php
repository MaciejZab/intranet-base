<?php

require_once __DIR__ . '/Partials/navbarTop.php';

$currentDate = date("Y-m-d");
$tomorrowDate = date("Y-m-d", strtotime("+1 day", strtotime($currentDate)));

?>

<div class="widgets">

    <div id="nd-container">
        <p><span class="nd">
                <?php echo $currentDate ?>
            </span><br>
            <span id="nd_today">&nbsp;</span>

        </p>

        <p><span>
                Tommorow
            </span><br>
            <span id="nd_tommorow">&nbsp;</span>

        </p>
    </div>

    <script src="/Utilities/Javascript/Widgets/NameDay/name_day_pl.js" type="text/javascript"></script>

    <a class="weatherwidget-io" href="https://forecast7.com/en/53d1218d01/bydgoszcz/" data-label_1="BYDGOSZCZ"
        data-label_2="WEATHER" data-days="5" data-theme="original" data-basecolor="" data-textcolor="#76777a"
        data-highcolor="#45ae52" data-lowcolor="#a9bbe2" data-suncolor="#375ea9" data-mooncolor="#375ea9"
        data-cloudcolor="#97999a" data-raincolor="#375ea9" data-snowcolor="#c5ceda"></a>
    <script>
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (!d.getElementById(id)) {
                js = d.createElement(s); js.id = id;
                js.src = 'https://weatherwidget.io/js/widget.min.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'weatherwidget-io-js');

    </script>


</div>

<style>
    #nd-container {
        display: flex;
        align-items: center;
        gap: 10%;
    }

    .nd {
        font-size: 1.2em;
        font-weight: bold;
    }

    #nd_nd {
        margin-top: 5px;
    }

    .widgets {
        margin: 35px;
        min-height: 177.5px;
    }

    .weatherwidget-io {
        width: 100%;
    }
</style>

<?php

require_once __DIR__ . '/Partials/dashboard.php';

?>