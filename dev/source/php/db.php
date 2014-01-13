<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */


return array(
    '*' => array(
        'tablePrefix' => 'craft'
    ),

    'site.dev' => array(
        'server' => 'localhost',
        'database' => 'site-dev',
        'user' => 'root',
        'password' => 'root'
    ),

    'site.com' => array(
        'server' => 'localhost',
        'database' => 'site-pro',
        'user' => 'admin',
        'password' => 'password'
    )
);