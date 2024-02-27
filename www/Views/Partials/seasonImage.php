<?php

$actual_year = date("Y");
$actual_month = date("m");
$actual_day = date("d");
$current_date = date("d.m.Y");
$current_date = strtotime($current_date);

$spring = strtotime("March 20");
$summer = strtotime("June 21");
$autumn = strtotime("September 22");
$winter = strtotime("December 21");

$season = ""; // Variable to store the current season

if ($current_date >= $spring && $current_date < $summer) {
    $season = "spring";
} else if ($current_date >= $summer && $current_date < $autumn) {
    $season = "summer";
} else if ($current_date >= $autumn && $current_date < $winter) {
    $season = "autumn";
} else if ($current_date >= $winter && $current_date <= 26) { // Christmas season is from December 1st to December 26th
    $season = "christmas";
} else {
    $season = "winter";
}

switch ($season) {
    case "spring":
        echo '<img src="/Resources/Graphics/season_images/top_bar_spring2.jpg" alt="Teleplan" style="width:100%">';
        break;
    case "summer":
        echo '<img src="/Resources/Graphics/season_images/top_bar_summer.jpg" alt="Teleplan" style="width:100%">';
        break;
    case "autumn":
        echo '<img src="/Resources/Graphics/season_images/top_bar_autumn.jpg" alt="Teleplan" style="width:100%">';
        break;
    case "christmas":
        echo '<img src="/Resources/Graphics/season_images/top_bar_christmas.jpg" alt="Teleplan" style="width:100%">';
        break;
    case "winter":
        echo '<img src="/Resources/Graphics/season_images/top_bar_winter.jpg" alt="Teleplan" style="width:100%">';
        break;
}