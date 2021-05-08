<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'milenium' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.dv]HGHN~S?pCE[]4Xj, {zv]~ptlOFmgoSuMQuUjH=8Ij]KC~Q4+ejS&2o*0M*X' );
define( 'SECURE_AUTH_KEY',  'kw;W5&kL:9ke`Q4<0K.O0Lt:}/JgqsjLF8#4f1!G> :N]$C?=$*Txi8l$1!g5-bW' );
define( 'LOGGED_IN_KEY',    'J}-<x=Z7`QhA1edE[4V5}6/A[2^*AMen^g]<r%G,%en]l6S7P3TY=Jf}Ln/bm5e ' );
define( 'NONCE_KEY',        'nlseohpcvQqF-f+n{Zjt(H&}O-*M&rlWP4On<P{_l,T=c`(56`t8:H48Fb.3}09Y' );
define( 'AUTH_SALT',        '/>a-{s;=GOGb,=yY.^>0< xuSHWgVXZ(fqJLdr~tGzJ3n~X7|q5q={ S=)I!vjx-' );
define( 'SECURE_AUTH_SALT', ';fTS`2!$u69@Vji^p/c{{7<?iUv-m=5wm>~cj}x+)n,+>*p*:~~5EZ7e~[n^xH1U' );
define( 'LOGGED_IN_SALT',   '%@*8GH!A k?5PX_lb-~$_W+|Br#O-IMM?_}:po2GpvaZM.13rbi5klF5e,7?9Ef{' );
define( 'NONCE_SALT',       '3E$KyJ$M]{4WComdoA]#!$fv>,>VzXgs0yQ bdZYmfKTCZ(]V7B20Xm1|I^-tGXe' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
