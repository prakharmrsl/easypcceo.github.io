---
title: "How to Safely Overclock Your CPU (Step-by-Step)" 
permalink: "/overclocking/cpu/"
layout: page
seotitle: "How to Safely Overclock Your CPU (Step-by-Step)" 
meta: "Overclocking your CPU can be tricky, especially if you're new to the world of building PCs. In this guide, you're going to learn exactly how to safely overclock your CPU, step-by-step."
---

<div class="author-line">
	<img class="author-image" alt="written by jacob tuwiner" data-src="/img/profile/close.jpg" />
	<span>Jacob Tuwiner</span>
</div>

* TOC
{: toc}

Whether you’re a gamer, content creator, artist, or editor, everyone can benefit from a boost in CPU performance. 

Overclocking a CPU gives it instructions to run faster than its stock settings. Some processors can overclock much higher than others, and even processors within the same model will always perform differently based on the [silicon lottery](https://forums.tomshardware.com/threads/what-is-the-silicon-lottery.1442554/){: target="_blank"}.

But before you begin, here are some critical things to keep in mind: 

## Overclocking Support
<img class="lazyload" alt="cpu overclocking header image" data-src="/img/overclocking/cpu/header.png" />

First, we’d like to note that not all processors or motherboards support overclocking. To make it easy for you, here are the current-gen processors and motherboards that support overclocking:

* All AMD Ryzen & Threadripper processors
* All AMD Motherboards besides A320 and A520
* Intel processors designated with a K or an X
* Only Intel Z370 and Z390 Motherboards

## Monitoring & Stress Testing

Secondly, there are some tools we think you should install before you overclock so that you can accurately determine whether or not you’ve got a good boost.

### CPU-Z

[CPU-Z](https://www.cpuid.com/softwares/cpu-z.html){: target="_blank"} is a great tool to have to check what’s going on under the hood of your computer in terms of the processor. It automatically detects your processor, gives you all of the specifications, and even holds info on your motherboard and RAM.

It’s just a nice-to-have tool that lets you know what you’ve got to work with before you go ahead and change anything.

### CineBench R15 & R20

For actually benchmarking your CPU, CineBench is just about one of the hardest things you can throw at it to get a good idea of where the performance of the processors stands.

For a large majority of CPUs, [CineBench R15](https://www.guru3d.com/files-details/cinebench-15-download.html){: target="_blank"} will suffice for testing as it’s just short enough on power not to crash your system but also good enough to give an accurate representation of your CPU’s performance. 

[CineBench R20](https://www.techspot.com/downloads/6709-cinebench.html){: target="_blank"} is more for high-end systems with core counts past 10-cores and high amounts of system memory.

### HWInfo

To get a live feed of all of your system’s hardware, [HWInfo](https://www.hwinfo.com/download/){: target="_blank"} is the go-to tool for us. 

It lets you know how hot your CPU and GPU cores are running, tracks how much power each component, and the speed at which everything is running. 

It’s just a useful tool to have and we highly suggest using it to monitor at least temperature if anything.

## DISCLAIMER

**Consider the following before making the choice to overclock:

Overclocking your CPU will 100% void its warranty as stated by the manufacturer. Incorrectly or overdoing a CPU overclock can cause BSODs which can damage and corrupt files on your computer. Similarly, pushing a CPU too far without proper cooling can shorten the lifespan of the chip or damage it outright.**

One more quick “Before You Begin,” if you chose to install CineBench or any other CPU benchmarking software you should run it while your CPU is still on its stock speed and record the numbers. 

Once you have the performance numbers saved somewhere, you can compare your overclocked results later and decide whether or not the overclock is worth it.

## How to Overclock Your Processor (MSI)

To begin CPU overclocking, first, we’ve gotta get into the BIOS which is kind of like your motherboard’s own little miniature operating system.

1. Restart your computer if it's on 
2. Either wait for the above screen and quickly press the ‘Delete’ key or just spam it until you enter the BIOS as we all do

<img class="lazyload" alt="bios" data-src="/img/overclocking/cpu/bios.jpg" />

After all that, you should end up on a screen similar to this. Each motherboard manufacturer will have a different looking BIOS, but the same principles apply to each.

At the top left, if you have an MSI motherboard at least, you’ll have a “Game Boost” or “OC Genie” option which will automatically adjust your CPU to a stable clock. 

For those who just want a quick and easy boost without having to worry about all of the trial and error of overclocking, using this feature might be useful.

If you want a more in-depth view, however, continue reading.

<img class="lazyload" alt="advanced bios" data-src="/img/overclocking/cpu/advanced-bios.jpg" />

Now that you’re ready to start the real overclocking, hit the F7 key to enter advanced mode and then click on OC Settings.

<img class="lazyload" alt="oc-settings" data-src="/img/overclocking/cpu/oc-settings.jpg" />

Once in OC settings, scroll down to CPU Ratio and hit “+” or “-” on your keyboard to increase or decrease your CPU clock. 

From here it’s a ton of trial and error, increase the clock as much as you want but keep in mind that large jumps in speed might have instability. 

A good way to start is overclocking by 100MHz increments.

<img class="lazyload" alt="overclocking save and exit" data-src="/img/overclocking/cpu/save-exit.jpg" />

After you change the CPU ratio, hit Escape and the Save and Exit. 

Now you should start going with those 100MHz increments, saving, and testing. Each time you have a good run you can increase the clock by another 100MHz until it crashes or gets too hot. 

Once you find the limit, go ahead and dial it back a bit for your perfect overclock.

Congratulations! You know how to overclock your CPU. Best of luck in your overclocking endeavors and try not to explode. 

## Is it Good to Overclock Your CPU? 

Yes, overclocking your CPU is a good idea, especially if you're rocking an overclocking friendly CPU. Ryzen CPUs are known for their overclocking potential, as are Intel's K series of unlocked processors. 

However, I'd only recommend overclocking if you have the right CPU cooler. Generally speaking, you can't overclock with your stock cooler, as it was designed to cool your CPU at stock frequencies. 

Buying a cheap but reliable aftermarket CPU cooler like the Cooler Master Hyper 212 Evo is a great idea, and will allow you to overclock easily. 

However, there are some drawbacks to overclocking your CPU. First of all, you run the risk of overheating, which occurs when your overclock is too high and/or your cooler isn't doing an adequate job. 

If this persists long enough, you could damage your CPU. Luckily, most new CPUs will turn off on their own when they get too hot to prevent damage. 

Voiding the manufacturer warranty is the other main drawback of overclocking — most warranties will be voided after you attempt to overclock. 

Do it at your own risk! 

## Why Would I Want to Overclock My CPU? 

Overclocking your CPU will squeeze every last drop of performance out of your CPU that you otherwise wouldn't be using. 

For example, I overclocked my Ryzen 3 1200 CPU from its base frequency to 4.0GHz, and it now rivals the performance of its big brother, the Ryzen 3 1300x (which is also more expensive). 

My CPU used to bottleneck on CPU intensive titles like Battlefield's 64 player conquest mode, but after overclocking, it's no longer a problem. 

## How Much Can I Overclock My CPU? 

Overclocking will increase your performance, but the degree to which your performance is impacted may vary. 

That was a complex sentence so let me break it down: 

Some CPUs will overclock better than others. For example, AMD CPUs are well known for overclocking, especially their Ryzen line. 

Other CPUs like Intel's locked processors won't overclock well, if at all. Look up the CPU before you buy, and see what kind of overclocking potential your CPU has. 
