---
title: "How to Fix Rust Crashing When Joining a Server" 
permalink: "/game-hosts/rust/crashing/"
layout: page
seotitle: "Rust Crashing When Joining Server? 5 Solutions (Working 2020)" 
meta: "Rust crashing when you're joining a server is a major pain in the butt. Here are my 5 solutions to fix the problem." 
---

<div class="author-line">
    <img class="author-image" alt="written by jacob tuwiner" src="/img/profile/close.jpg" />
    <span>Jacob Tuwiner</span>
</div>

<ul id="markdown-toc">
  <li><a href="#rust-crashing-fixes" id="markdown-toc-rust-crashing-fixes">Rust Crashing Fixes</a></li>
  <li><a href="#increase-your-virtual-memory-limit" id="markdown-toc-increase-your-virtual-memory-limit">Increase Your Virtual Memory Limit</a></li>
  <li><a href="#updating-your-graphics-drivers" id="markdown-toc-updating-your-graphics-drivers">Updating Your Graphics Drivers</a>    
  </li>
  <li><a href="#try-running-in-directx-9" id="markdown-toc-try-running-in-directx-9">Try Running in DirectX 9</a></li>
  <li><a href="#opt-out-of-steam-beta-participation" id="markdown-toc-opt-out-of-steam-beta-participation">Opt Out of Steam Beta Participation</a></li>
  <li><a href="#verify-game-files" id="markdown-toc-verify-game-files">Verify Game Files</a></li>
  <li><a href="#rust-game-requirements" id="markdown-toc-rust-game-requirements">Rust Game Requirements</a></li>
  <li><a href="#rust-still-crashing-when-joining-server" id="markdown-toc-rust-still-crashing-when-joining-server">Rust Still Crashing When Joining Server?</a></li>
</ul>

Here's the deal:

You're trying to beat some trees, destroy some rocks, blow up some bases, and loot some noobs. 

But instead of spawning, the game is crashing when you're trying to join the [Rust server](/game-hosts/rust/). The only thing worse than lagging, is not being able to join in the first place.

I've had this issue myself, and have compiled a list of the 5 solutions that helped me fix Rust crashing when I was joining a server.

Let's dive in: 

## Rust Crashing Fixes

There are quite a few different reasons that your game could crash when attempting to join a server:

* Outdated Graphics Drivers
* Outdated Steam Client
* Low Virtual Memory
* Missing game files
* Discord overlay sometimes causes crashes

Whatever your issue may be, we've got the solution for you. 

First, make sure the server is using a [good server host](/game-hosts/) - however, it's most likely a problem on your end, rather than the server.

Next, try each one of these in order until Rust stops crashing. 

## Increase Your Virtual Memory Limit

This is one of the most common fixes for Rust crashing, although not as simple as some of the other options.

Note: This will require a system restart.

* Open file manager and right-click This PC

* Go to Advanced system settings in the top right

* Under performance, go to settings

* Select Advanced at the top

* Select Change under Virtual memory

* Deselect Automatically manage paging file size for all drives

* Click on your drive and go to Custom size

* Look at the Currently allocated amount, add 2048 to it, and type the resulting number into both Initial size and Maximum size

* Click set, OK, OK again, then Apply

* Restart Windows and try running Rust

## Updating Your Graphics Drivers

Outdated graphics drivers are a lot more common of a problem, but they’re generally the easiest fix you can do and you might as well update them anyway. You might actually get better performance in all of your games.

### Nvidia
<img class="lazyload" alt="geforce drivers" data-src="/img/game-hosts/rust/crashing/geforce-drivers.png">

* Install the [Nvidia GeForce Experience](https://www.nvidia.com/en-us/geforce/geforce-experience/download/){: target=”_blank”} application if you haven’t already

* Once installed, open the application and make an account or login

* Click on the Drivers tab and select Check for Updates

### AMD
<img class="lazyload" alt="amd drivers" data-src="/img/game-hosts/rust/crashing/amd-drivers.png">

* Download and install the [AMD Auto Detect and Install](https://www.amd.com/en/support){: target=”_blank”} tool (scroll down on the page)

* Once installed run the application and click Install

* When it’s finished it will automatically detect your graphics card


* After detecting the drivers, it will prompt you to select a version

* Select the Recommended Version and hit Install

## Try Running in DirectX 9

Your game might take a very small hit in performance with this method, but it’s not a difference that’s noticeable by most people and you want to get to playing Rust already right?

* Start Steam, navigate to your library, and find Rust

* Right-click Rust and select Properties

* Select Set Launch Options

* Type “-dx9”

* Try launching again

## Opt Out of Steam Beta Participation

Some users might have opted into Steam’s beta program in the past but forgot. Steam’s Beta Participation program allows you to test new updates for games before they get rolled out to the majority of players. This can, of course, lead to some unstable build installations.

* Start Steam

* In the top left, click Steam, then go into Settings

* If you are participating in Steam Beta, click CHANGE

* Open the drop down menu and select “NONE - Opt out of all beta programs”

* Hit OK and restart Steam

## Verify Game Files 

Your game files may be corrupted. Try verifying them to make sure everything is okay.

* Find Rust in your Steam Library
* Right-click on Rust
* Select "Properties"
* Click on the "Local Files" tab
* Click the "Verify Integrity of Game Files" button 

Steam will check your game files to make sure there aren't any issues. If so, they'll be fixed. 

## Rust Game Requirements

If all of the solutions above aren't working, your PC might not be powerful enough to run the game. 

Here are Rust's minimum requirements according to the [Steam page](https://store.steampowered.com/app/252490/Rust/){: target="_blank"}:

* OS: 64-bit processor and operating system 
* CPU: Intel Core i7-3770 / AMD FX-9590 or better
* Memory: 10 GB RAM
* Graphics: GTX 670 2GB / AMD R9 280 better
* DirectX: Version 11
* Network: Broadband Internet connection
* Storage: 20 GB available space
* Additional Notes: SSD is highly recommended or expect longer than average load times.

But remember, *that's just the bare minimum*. For ideal performance, these are the recommended specs: 

* OS: 64-bit processor and operating system
* CPU: Intel Core i7-4690K / AMD Ryzen 5 1600
* Memory: 16 GB RAM
* GPU: GTX 980 / AMD R9 Fury
* DirectX: Version 12
* Network: Broadband Internet connection
* Storage: 20 GB available space
* Additional Notes: SSD is highly recommended.

## Rust Still Crashing When Joining Server?

If Rust is still crashing when joining a server, well, sorry bro. 

You can [contact me](/contact/) for additional help :)