---
layout: post
math: true
title: "Catalan数、Dyck路和Bertrand投票问题"
categories: 随笔
tags: 组合数学
---

事先声明，没有Richard P. Stanley的《Catalan Numbers》，所以并不知道书中写了些什么，如有重复纯属意外。

Catalan数 $C_n=\frac{1}{n+1}\dbinom{2n}{n}$ 在许多计数模型中都会出现，Dyck路（Dyck Paths）是其中较为经典的一种。为了方便之后的叙述，我们将Dyck路放在平面直角坐标系中。即从 $(0,0)$ 开始，每次加 $(1,0)$ 或 $(0,1)$ ，最终得到 $(n,m)$ ，考虑完成这个过程有多少种不同的方法。

不加其他限制条件的Dyck路问题已经成为了小学奥数中的常客，在此不多加叙述。
