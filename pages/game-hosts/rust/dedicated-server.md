---
title: "How to Host a Dedicated Rust Server for Free" 
permalink: "/game-hosts/rust/dedicated-server/"
layout: page
seotitle: "How to Make a Rust Server in 10 Minutes (Easy)" 
meta: "If you're tired of being senselessly killed after spawning, making your own Rust server is the move." 
---

<div class="author-line">
    <img class="author-image" alt="written by jacob tuwiner" src="/img/profile/close.jpg" />
    <span>Jacob Tuwiner</span>
</div>

<ul id="markdown-toc">
  <li><a href="#rust-server-requirements" id="markdown-toc-rust-server-requirements">Rust Server Requirements</a></li>
  <li><a href="#installing-steamcmd" id="markdown-toc-installing-steamcmd">Installing SteamCMD</a></li>
  <li><a href="#installing-the-rust-dedicated-server" id="markdown-toc-installing-the-rust-dedicated-server">Installing the Rust Dedicated Server</a></li>
  <li><a href="#branch-modifications" id="markdown-toc-branch-modifications">Branch Modifications</a></li>
  <li><a href="#rust-oxide" id="markdown-toc-rust-oxide">Rust Oxide</a>    
  </li>
  <li><a href="#configuring-and-running-the-server" id="markdown-toc-configuring-and-running-the-server">Configuring and Running the Server</a></li>
  <li><a href="#batch-script-file" id="markdown-toc-batch-script-file">Batch Script File</a>    
  </li>
  <li><a href="#batch-file-commands-for-rust-servers" id="markdown-toc-batch-file-commands-for-rust-servers">Batch File Commands for Rust Servers</a></li>
  <li><a href="#connecting-to-your-server" id="markdown-toc-connecting-to-your-server">Connecting to Your Server</a>   
  </li>
  <li><a href="#owners-and-moderators" id="markdown-toc-owners-and-moderators">Owners and Moderators</a>    
  </li>
  <li><a href="#promoting-your-server" id="markdown-toc-promoting-your-server">Promoting Your Server</a></li>
</ul>

Hosting a Rust server can be a great deal of fun for you and your friends without having to deal with the frequent griefing of randoms in normal online play.

I started playing Rust back in the legacy days, when people were actually nice to each other (more or less) and didn't kill on sight or senselessly grief. 

But those days are over. Most Rust servers are full of jerks. 

Making your own Rust server is a great way to make the game fun again, giving you total control of your world. 

In this tutorial, I'm going to show you the fastest way to make your own Rust server, step-by-step. 

There won't be any room for error - follow the tutorial, and you'll be up and running in 10 minutes!

## Hosting a Rust Server The Easy Way 
<img class="lazyload" alt="rust banner" data-src="/img/game-hosts/rust/dedicated/rust.jpg" />

If you don't want to know about the easy way to host a Rust server, skip this section and continue with the tutorial. 

But if you're interested, here's the deal:

Hosting your own Rust server is a great way to learn the game, create base designs, practice, and have fun with a few friends. 

It's also a pain in the ass to manage, and takes a while to setup. 

But there's another problem: 

When you host the server on your own PC, it's going to consume your resources. Your computer not only has to run the game, it also has to run the server and manage everyone connected to the server. 

Dedicated Rust server hosting is taxing on your system's performance, not to mention your internet bandwidth. There are ways to [improve your internet speed](/improve-internet-speed-gaming/), but nothing you do will be enough to host more than 5-10 people on the server.

Furthermore, your friends can only connect to the server when it's running on your PC, meaning you'd have to leave your computer on 24/7 to have a real Rust server that actually attracts a player base. 

<div class="quick-tip">
  <h4>Quick Tip<i class="box-icon-spacing fas fa-check"></i></h4>

  <p>If you want to have a real Rust server that can accomodate dozens of people and run 24/7 without compromising performance, paying for Rust server hosting is the way to go.</p>

  <p>It's cheap, fast, and easy. Plus, it's the only way you'll be able to host a <i>real</i> Rust server. If you want to host a Rust server the easy way, check out our guide on the <a href="/game-hosts/rust/">best Rust server hosting companies</a>.</p>

</div> 

If you want to host a Rust dedicated server the easy way, you're better off investing a small amount to pay for a dedicated server. 

## Hosting a Rust Server (The Hard Way)

<div class="vid-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/A21Okdl114Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Well, if paying for hosting isn't your thing, I've got your back. 

You're about to learn exactly how to make a Rust server, step-by-step.

Let's dive in:

## Rust Server Requirements

* 64-Bit Windows 7, 8.1, or 10
* Minimum 4GB RAM (but 8GB highly advised)
* Minimum 6GB drive space

*If you’re hosting on a computer that’s separate from the one you’re playing Rust on, then 4GB of RAM is excellent for the dedicated server.

A compressions software like [7-zip](https://www.7-zip.org/download.html){: target="_blank"} or [Winrar](https://www.rarlab.com/download.htm){: target="_blank"} may also come in handy.

**Note:** 

In this tutorial, you’ll log into the server as anonymous, but some servers require you to configure with a real Steam account.

You cannot play Rust on the same account that is hosting the Rust server. If you run as anonymous, you can still participate.

## Installing SteamCMD

First, let’s cover the SteamCMD installation. SteamCMD is essentially a command prompt application for Steam.

* Download the Windows edition of [SteamCMD](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip){: target="_blank"} or the [Linux or MacOS](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD){: target="_blank"} versions if needed

* Once downloaded, right-click the file and select “Extract to steamcmd” if you have an archival application and place the resulting folder on your desktop.

<img class="lazyload" alt="steam cmd on desktop" data-src="/img/game-hosts/rust/dedicated/steamcmd.png">

* Now open the steamcmd folder and open the steamcmd application

* A command prompt will open and begin to update. Just wait for the window to finish, it’ll look something like this:

<img class="lazyload" alt="command prompt" data-src="/img/game-hosts/rust/dedicated/command-prompt.png">

* From here log in using the command login anonymous

<img class="lazyload" alt="login anonymous" data-src="/img/game-hosts/rust/dedicated/login-anonymous.png">

* Leave this window open as we move to the next part

## Installing the Rust Dedicated Server

Time to install the Rust server itself.

* First you have to set a destination folder for the server to run from with this command: **force_install_dir C:\steamcmd\rust_server** but replace the file location with your desired server folder

* And install the server with the command **app_update 258550 validate**

<img class="lazyload" alt="steam server validate" data-src="/img/game-hosts/rust/dedicated/validate.png">

* This might take a minute

* Once it says “Success” you may close the application

## Branch Modifications 

If you’d like to release beta updates to your server there are a couple of commands you can input instead of the **app_update 258550 validate** command.

To receive the most recent updates from Rust’s Beta Staging, use the command **app_update 258550 -beta staging**.

To receive pre-release updates, use the command **app_update 258550 -beta prerelease**.

## Rust Oxide 

Rust Oxide is a server-side Rust mod that allows you to outfit your server with tons of amazing plugins to enhance the experience.

### How to Install Rust Oxide

The installation process is quick and painless. Here’s how you do it:

* Download uMod’s latest version [here](https://umod.org/games/rust){: target="_blank"}

* Make sure your server is turned off

* Extract the Oxide zip file

* Copy the folder named RustDedicated_Data

* Paste it into your Rust server folder and overwrite the RustDedicated_Data folder that was there already

* Once all of the files are finished copying over, start the server and allow it to finish its setup

* When it’s finished, verify the Oxide version by typing the command oxide.version and it should look something like this

<img class="lazyload" alt="installing rust oxide" data-src="/img/game-hosts/rust/dedicated/oxide.png">

### Adding Plugins to Rust Oxide

Now all that’s left is to add some plugins! For a list of the best Rust plugins for 2020 check out the very bottom of our [Rust hosting list](https://www.easypc.io/game-hosts/rust/#best-rust-server-mods-and-plugins-in-2020){: target="_blank"}

## Configuring and Running the Server 

All of the tiles are set and you’re 100% ready to start up the server and get to joining! There isn’t really any configurations we can cover here, just play around with the Admin commands and figure out what everything does.

* Navigate to the folder you chose to place your rust server folder (in our case C:\steamcmd\rust_server)

<img class="lazyload" alt="executing rust server" data-src="/img/game-hosts/rust/dedicated/execute.png">

* Double-click the RustDedicated executable to start your server 

* Wait for it to load

* Now you’re ready to connect!

## Batch Script File 

To keep your server up to date and functioning properly or create a system to relieve the stress of constantly typing in commands, it’s a good idea to configure your Batch Script file which will automatically employ certain commands upon server startup.

### Update Batch File

This file will offer you a way to easily check for updates whenever you might need to update your server.

* Open your server folder

<img class="lazyload" alt="rust server folder" data-src="/img/game-hosts/rust/dedicated/folder.png">

* Create a new text document and open it

* Type **C:\steamcmd\steamcmd.exe +login anonymous +force_install_dir "C:\steamcmd\rust_server" +app_update 258550 validate +quit** but replace the file locations with your steamcmd and server locations

<img class="lazyload" alt="creating batch file" data-src="/img/game-hosts/rust/dedicated/bat-file.png">

* Hit File, then Save As and save the document as update.bat

* Remember to delete the old text document, then open the update.bat file

* Any time you want to check for an update, simply open the file again

### Run Server Batch File

This file should serve as the primary way you start your server.

* Create a new text document in your Rust server folder

* Open it and type the following: **@echo off cls :start RustDedicated.exe -nographics -batchmode -silent-crashes +server.ip “(fill in your server ip)” +server.identity “(fill in your server identity)” +server.port 28015 +rcon.port 28016 +rcon.password “fill in a password” -logfile “ServerLog.txt” +rcon.web true -logfile “output.txt” goto start**

Note: When filling in the spaces with your info, do not include the parenthesis.

<img class="lazyload" alt="run file" data-src="/img/game-hosts/rust/dedicated/run-file.png">

* Go to File, Save as, and save the file as Run.bat

* After saving, remove the old text document and run the batch file to test if your server runs

## Batch File Commands for Rust Servers

Here’s a list of batch file commands for Rust servers and what they do:

* **echo off** Tells the server not to display all executed batch commands.

* **:start** Start point of the server.

* **goto start** Tells the server to restart upon shut down.

* **-batchmode** Opens Unity in non-GUI mode.

* **+server.port 28015** Runs Rust’s default port for client connection.

* **+server.seed X** The seed determines the shape of a procedurally generated world (kinda like Minecraft), and the value ranges are 0-2147483647.

* **+server.level “Procedural Map”** Picks the server map. You can replace “Procedural Map” for other maps like “SavasIsland,” “SavasIsland_koth,” “Barren,” and “HapisIsland”.

* **+server.worldsize X** Select a world size between 1000 and 6000.

* **+server.maxplayers X** Choose the number of player slots the server has.

* **+server.hostname “Server Name”** Choose the name your server will display on the server list.

* **+server.description “Server Description”** Choose the description your server will display on the server list.

* **+server.url “https://yourwebsite.com”** If a website is placed here, a “View Webpage” button will appear when connecting to the server.

* **+server.headerimage “Image link”** Paste an image link that will be used as the background image when connecting to the server.

* **+server.identity “server0”** The parent name for all server files.

* **+rcon.port 28016** Rcon port for client connection.

* **+rcon.password “password”** Rcon access password. It does not allow spaces or special characters.

* **+rcon.web 1** Rcon WebSocket connection mode.

## Connecting to Your Server

If you’re hosting your server on the same computer that you’ll be playing on, joining is as simple as it gets. If connecting on a separate PC, there’s a little extra work.

### Connecting Locally

* Open Rust from your desktop or from Steam

* Load into the game and open the console by pressing F1

* Type client.connect localhost:28015

* Wait to connect

### Connecting From Another Computer

You have to find the IP address of your computer so it can find the right server and connect to it. 

Note: You will only be able to connect from computers on the same internet connection as the server host. 

To connect from outside the network, [port forwarding](https://portforward.com/rust/){: target="_blank"} is required.

* Press Windows + R on your keyboard and type cmd, then hit Enter or click OK

* Type ipconfig and hit Enter

* Look for the IPv4 Address and either copy it with Ctrl + C or write it down

* Follow steps 1 & 2 from the Connecting Locally section

* For step 3 from the last section, replace localhost with the IPv4 Address

## Owners and Moderators 

There are two ways to promote players to moderators or admins on your Rust server. 

While both work just fine you will need the user’s Steam ID for either.

One quick and easy way to find a user’s Steam ID is the [SteamIO](https://steamid.io/){: target="_blank"}  tool.

### Online

This method can be used any time you have access to the server console.

* Make sure the server is running and the console is open

* Enter the command ownerid “user-id” for administrators

* Enter the command moderator “user-id” for administrators

* Each time you promote a user, use the command serverwrite.cfg

* Have the user log off and then back on to refresh their role

### Offline

This method can only be used when the server is offline.

* While the server is offline, go to your rust_server folder, server, then my_server_identity

* Enter the folder labeled “cfg”

* Edit the file “users.cfg” and use either of the same commands from above

* If there is not a file named users.cfg, create a text document and name it that

## Promoting Your Server

If you plan on trying to turn your dedicated server into a public masterpiece there are a couple routes you can take to promote your server.

First of all, before you put it out for the world to see, come up with a catchy server name and description for players to see on the server list. You can even change the loading picture to make your server stand out from the rest.

Second, take advantage of all the online resources at your disposal. Forums like the official [PlayRust](https://www.reddit.com/r/playrust/){: target="_blank"} and [Rust Server Directory](https://www.reddit.com/r/playrustservers/){: target="_blank"} subreddits are great places to start.

You can also post on [Rust’s official discord server](https://discordapp.com/invite/rust){: target="_blank"} and try to garner a following there. If officiality isn’t your thing, there are hundreds of player-ran servers out there to advertise on.

## Dedicated Rust Server vs Rust Server Hosting

Each type of hosting has its own tradeoffs. Use these pros and cons to choose whichever fits your Rust server needs best.

### Dedicated Rust Server

Dedicated hosting, for the most part, is best for when you want to host a small server with a couple of friends.

Trying to grow past that small player count is difficult with the limited resources that your PC and internet can provide.

**Pros:**

* Free

* Full customization freedom

* User serviceable

**Cons:**

* Little to no protection

* Uses personal resources like processing power and internet bandwidth

*  Requires a little know-how to set up and manage

* Only fit for a small player count

### Rust Server Hosting 

While you have to pay a monthly fee to use the service, purchasing a host allows you to run much bigger and faster servers than you ever can on a dedicated connection.

**Pros:**

* No strain on your internet or computer

* Much faster

* Included support team

* Ease of use and quick setup

**Cons:**

* Paid service

* May limit control

* May not allow direct access to server files

## Frequently Asked Questions 

Here are some of the most common questions I get about Rust dedicated server hosting: 

### Can you play rust on a private server?

Yes, if you create your own server, you can play Rust privately with your friends (or yourself).

### How much is a server on Rust?

If you setup your own Rust server, it's free (aside from your electric/WiFi bill). Otherwise, most [Rust server hosting companies](/game-hosts/rust/) like [Host Havoc](/game-hosts/host-havoc/) charge between $30 and $130 for a good Rust server. 

### What is the best Rust server provider? 

Host Havoc and PingPerfect are two great options. If you want a cheap Rust server, go with Gameserverkings. 

### What is my Rust server IP? 

As long as you've port forwarded, search "what is my IP" in Google and you'll have your answer. If you're using a hosting company for your Rust server, you'll find your IP in the dashboard (control panel).

## Conclusion 

Hosting a Rust server is a great way to unwind with friends and escape the trolls that pollute official Rust servers.

Hopefully this guide helped you learn how to make a Rust server. If you have any questions, please feel free to [contact me](/contact/) for help.

Cheers!

<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can you play rust on a private server?","acceptedAnswer":[{"@type":"Answer","text":"Yes, if you create your own server, you can play Rust privately with your friends (or yourself)."}]},{"@type":"Question","name":"How much is a server on Rust?","acceptedAnswer":[{"@type":"Answer","text":"If you setup your own Rust server, it’s free (aside from your electric/WiFi bill). Otherwise, most Rust server hosting companies like Host Havoc charge between $30 and $130 for a good Rust server."}]},{"@type":"Question","name":"What is the best Rust server provider?","acceptedAnswer":[{"@type":"Answer","text":"Host Havoc and PingPerfect are two great options. If you want a cheap Rust server, go with Gameserverkings."}]},{"@type":"Question","name":"What is my Rust server IP?","acceptedAnswer":[{"@type":"Answer","text":"As long as you’ve port forwarded, search “what is my IP” in Google and you’ll have your answer. If you’re using a hosting company for your Rust server, you’ll find your IP in the dashboard (control panel)."}]}]}</script>