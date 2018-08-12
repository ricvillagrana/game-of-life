# Game of Life
## History
In late 1940, John von Neumann defined life as a creation (as a being or organism) which can reproduce itself and simulate a Turing machine. Von Neumann was thinking about an engineering solution which would use electromagnetic components floating randomly in liquid or gas. This turned out not to be realistic with the technology available at the time. Thus, ingeniously, Stanisław Ulam invented cellular automata, which were intended to simulate von Neumann's theoretical electromagnetic constructions. Ulam discussed using computers to simulate his cellular automata in a two-dimensional lattice in several papers. In parallel, Von Neumann attempted to construct Ulam's cellular automaton. Although successful, he was busy with other projects and left some details unfinished. His construction was complicated because it tried to simulate his own engineering design. Over time, simpler life constructions were provided by other researchers, and published in papers and books.

The initial goal of John Conway was to define an interesting and unpredictable cell automaton. Thus, he wanted some configurations to last for a long time before dying, other configurations to go on forever without allowing cycles, etc. It was a significant challenge and an open problem for years before experts on cell automatons managed to prove that, indeed, Conway's Game of Life admitted of a configuration which was alive in the sense of satisfying Von Neumann's two general requirements. While the definitions before Conway's Life were proof-oriented, Conway's construction aimed at simplicity without a priori providing proof the automaton was alive.

## Running
You jues need to type this in the project directory:

    node ./app.js

And you can also add grids in "/data/grids" (copy repeat.js and edit it if needed).

## The Rules
- Any live cell with fewer than two live neighbors dies, as if by under population.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
