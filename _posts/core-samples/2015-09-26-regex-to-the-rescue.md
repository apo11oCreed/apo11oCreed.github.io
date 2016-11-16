---
layout: post
category : blog
tagline: "Find and Replace on Steroids"
tags : [blog, tools]
description: I am still fascinated by how powerful regular expressions are when used to automate tasks in large volumes of source code.
---
{% include JB/setup %}

## Find and Replace on Steroids

To this day, I am still fascinated by how powerful regular expressions are when used to automate tasks in large volumes of source code.

Years ago, I experimented with using the regex option in Dreamweaver and since then, these miniscule formulas have become staples in my workflow. The true benefit in my experience has been to reduce repetitive tasks to shortcuts via regex.

Recently being tasked to find and remove HTML elements in 4000+ lines of source code all in html entity syntax, the experience became a true test of regex utility.

This was my starting point to grab ANY html tag:

    &[^\s].*?
    
And then I found and used this specimen to nest between strings:
    
    (.*)

Can't say the outcome was perfect, but it left me wanting to learn more.

In another recent instance, I discovered how Javascript can be enhanced by regex when looking for specific strings - whether in filenames, tags, etc. Can't wait to put it to use.

I highly recommend getting comfortable with regex to ultimately build custom formulas. A great practicing tool, if you have access, is Google Analytics. And another great tool is [regexer](http://www.regexr.com).