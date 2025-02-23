<?php

echo "Enter the title of the post: ";
$fin = fopen ("php://stdin","r");
$line = fgets($fin);

echo "What language is the post in? (en, fi)";
$fin = fopen ("php://stdin","r");
$language = trim(fgets($fin));

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
excerpt:
---\n\n";

fwrite($fin, $frontMatter);
fclose($fin);

// add the file to git
shell_exec("git add posts/".$filename);