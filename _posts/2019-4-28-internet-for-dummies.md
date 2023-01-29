---
layout: article
title: 'How does the Internet work?'
date: 2019-4-28
---

Let’s start with websites. I can write some text in a file then and save that file in a folder on my computer’s desktop. When I double click on the file, my browser application (Google Chrome) automatically opens to display the text in the file. I made a website! Website files can be simple or complicated. We have the option to use special symbols and code so the browser can make links, animate stuff all pretty-like, and move data around.

Say Bob wants to learn more about Alice by visiting her website. He doesn’t have the files for Alice’s website on his computer, but he knows that he can get them over the Internet by typing the URL “https://alice.com/about” into his browser. The browser’s job is to go find Alice’s website files then display them.

To keep the Internet organized, each connected computer is given a special address, just like houses in the physical world. Instead of street names, computers like to use numbers. For example, my IP address is 97.87.180.102. When the browser goes to find alice.com, it’s really just trying to figure out which computer to request files from. What’s Alice’s IP address?

The first stop on the quest by default is Bob’s Internet service provider, for instance Comcast. The browser sends a signal through wifi and cables (or over mobile networks) asking, “What’s the IP address of alice.com?” Comcast has a computer which is constantly listening for these queries and resolving them. It’s called a Recursive Resolver. So Bob’s browser waits for the Recursive Resolver to answer, “Here you go! I found Alice’s IP address.”

The Recursive Resolver sees “alice.com” and goes to another computer called a Root Server. There are a few of these spread throughout the world, some managed by the government, some by companies, and some by universities or other nonprofits. The Root Server says, “OK do you have a .com, .gov, .net, .edu, or what? Looks like .com, so here’s the computer in charge of that top level domain.” Verisign is the company that manages the .com TLD name server.

So the Recursive Resolver goes to Verisign’s computer (server) and says, “Can you help me find alice.com?” Since Verisign manages all the .com addresses, it says, “Of course I can help you find alice in my .com phonebook! She bought alice.com from me ages ago, and she pays on time every year. What a great customer! Her IP address is 23.227.38.32.” Now the Recursive Resolver goes back to Bob’s browser and hands off the IP address.

Now, Bob’s browser can go to Alice’s address, knock on the door, and ask for her “about” page. Alice, of course, keeps her website on a computer that listens for such requests. So her computer sends Bob’s browser the “about.html” file, and Bob’s browser can proudly display the page to Bob on his computer screen!
