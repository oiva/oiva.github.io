<?php

$dir = './posts';
$posts = glob($dir . '/*.md');
$tags = [];

function get_tags($content) {
    $tags_start = strpos($content, 'tags:');
    if ($tags_start === false) {
        return [];
    }
    $tags_start += 6;
    preg_match('/(---)|(\n[a-z])/', substr($content, $tags_start), $matches, PREG_OFFSET_CAPTURE);
    $tags_end = $tags_start + $matches[0][1];
    $tags = substr($content, $tags_start, $tags_end - $tags_start);
    // split on newline
    $tags = explode("\n", $tags);
    $tags = array_map(function($tag) {
        return preg_replace('/-\s?/', '', $tag);
    }, $tags);
    $tags = array_map('trim', $tags);
    return $tags;
}

foreach ($posts as $post) {
    echo $post . "\n";
    $content = file_get_contents($post);
    $tags = array_merge($tags, get_tags($content));
}

$tags = array_unique($tags);
$tags = array_values($tags);
sort($tags);

print_r($tags);