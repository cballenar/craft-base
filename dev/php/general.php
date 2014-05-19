<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        'omitScriptNameInUrls' => true
    ),

    'site.dev' => array(
        'devMode' => true,

        'environmentVariables' => array(
            'siteUrl'        => 'http://site.dev/'
        )
    ),

    'site.com' => array(
        'cooldownDuration' => 0,

        'environmentVariables' => array(
            'siteUrl'        => 'http://site.com/'
        )
    )
);