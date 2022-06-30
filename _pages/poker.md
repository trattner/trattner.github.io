---
layout: about
title: Texas Hold'em Is A Bad Bet
permalink: /poker/
date: 2019-1-25
description: 'My thoughts on playing poker professionally from 2018.'
searchable: true
---

While watching the 2018 World Series of Poker, I decided to create a <a href="https://github.com/trattner/poker-sim" target="_blank">Texas Hold'em simulation in Python</a>.

My <a href="https://github.com/trattner/poker-sim/blob/master/hold-em.py" target="_blank">game representation</a> includes cards with face values and suits as well as a standard 52-card deck that randomly deals. The game table consists of arbitrarily many players who each hold a hand of cards. Within the game class is a method to find the best five-card hands for each player and compare them, breaking ties according to the rules.

To investigate the chances of winning, I <a href="https://github.com/trattner/poker-sim/blob/master/analyze2.py" target="_blank">analyzed</a> a simplified model of the game where our only choice is to fold or bet on our pocket cards. It is assumed that everyone makes some small fixed bet each subsequent round. For an n-player game, we can find the optimal hand-ranking cutoffs for greatest cumulative expected return and check our tables against commonly accepted results (for example, <a href="https://www.tightpoker.com/poker_hands.html" target="_blank">this website</a> and <a href="https://wizardofodds.com/games/texas-hold-em/" target="_blank">this one</a>).

![middle hands][table3]

Playing the simplified game with the optimal strategy gives us an idea of the underlying variance. We can see that the number of players substantially affects the likelihood of losing one's bankroll at some point during a game.

![simulated returns with optimal play among 5 players][n5]

![simulated returns for 7][n7]

It's been well-documented that beyond some basic mathematical understanding, folks who manage to turn a steady profit find the biggest success factors to be metagame-related&mdash;things like self-control and finding fish to fry. Also, professionals find bigger upside in playing no-limit games where the math is substantially more complicated and thus people factors or "creativity" can play an even larger role.

Given that there's a nontrivial underlying chance (>10%) to lose the day's cash based on the simplified math alone, and moreover that a large part of the poker life is tuning metagame factors rather than purely competing on game strategy, I would not recommend playing hold'em as a satisfying nor mentally healthy way to earn a wage.

<br>

<i>Reposted on 6/29/22 from an [old web portfolio](https://github.com/trattner/atratt/blob/master/_posts/2019-1-25-poker-sim.md).</i>


<!--For 5 players, bust 0.7078 (0.0705348140991) and cashout 0.2574 (0.0700088565826).
For 6 players, bust 0.2666 (0.0668164650367) and cashout 0.7314 (0.0670077607446).
For 7 players, bust 0.1692 (0.0573703756306) and cashout 0.8308 (0.0573703756306).
For 8 players, bust 0.1588 (0.053726715887) and cashout 0.8412 (0.053726715887)-->

[table1]: https://raw.githubusercontent.com/trattner/atratt/f3d6c0d6d0c122af2b56531209372dd7d1390a34/img/poker-sim//ranking-top.png#L
[table2]: https://raw.githubusercontent.com/trattner/atratt/f3d6c0d6d0c122af2b56531209372dd7d1390a34/img/poker-sim//ranking-bottom.png#L
[table3]: https://raw.githubusercontent.com/trattner/atratt/f3d6c0d6d0c122af2b56531209372dd7d1390a34/img/poker-sim//ranking-middle.png#L

[n5]: https://raw.githubusercontent.com/trattner/atratt/f3d6c0d6d0c122af2b56531209372dd7d1390a34/img/poker-sim//5-bust.png#L
[n6]: https://raw.githubusercontent.com/trattner/atratt/f3d6c0d6d0c122af2b56531209372dd7d1390a34/img/poker-sim//6-bust.png#L
[n7]: https://raw.githubusercontent.com/trattner/atratt/f3d6c0d6d0c122af2b56531209372dd7d1390a34/img/poker-sim/7-bust.png#L
[n8]: https://raw.githubusercontent.com/trattner/atratt/f3d6c0d6d0c122af2b56531209372dd7d1390a34/img/poker-sim/8-win.png#L
