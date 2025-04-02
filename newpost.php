<?php

echo "Enter the title of the post: ";
$fin = fopen ("php://stdin","r");
$line = fgets($fin);

echo "What language is the post in? (en, fi): ";
$fin = fopen ("php://stdin","r");
$language = trim(fgets($fin));

echo "Add hero image? (y / n): ";
$fin = fopen ("php://stdin", "r");
$hero = strtolower(trim(fgets($fin)));
$hero = $hero == "y";

assert($language == "en" || $language == "fi");

$slug = trim(strtolower(str_replace(" ", "-", $line)));
$title = trim($line);
$filename = date("Y-m-d")."-".$slug.".md";

echo "Creating post...\n";
echo "touch posts/".$filename."\n";

// create the file
$fin = fopen ("./posts/".$filename, "w") or die('Permission error');
date_default_timezone_set("Europe/Helsinki");
$localTime = date("Y-m-d H:i:s");
date_default_timezone_set("UTC");
$gmtTime = gmdate("Y-m-d H:i:s");

$frontMatter = "---
published: true
status: publish
layout: post
title: \"".$title."\"
language: ".$language."
date: ".$localTime."
date_gmt: ".$gmtTime."
excerpt:\n";

if ($hero) {
    $frontMatter .= "hero:
  src: /images/2025/hero.webp
  src_small: /images/2025/hero-small.webp
  width: 686
  height: 386
  alt: \n";
}
$frontMatter .= "---\n\n";

fwrite($fin, $frontMatter);
fclose($fin);

// add the file to git
shell_exec("git add posts/".$filename);