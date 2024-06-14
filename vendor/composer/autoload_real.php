<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitb637f60363ff2e38139e0d20e1a4920b
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitb637f60363ff2e38139e0d20e1a4920b', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitb637f60363ff2e38139e0d20e1a4920b', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitb637f60363ff2e38139e0d20e1a4920b::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
