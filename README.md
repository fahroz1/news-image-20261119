# One Image: World News of 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/fahroz1/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/fahroz1/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A single image summing up the world news of 19 November 2026: a newspaper titled "THE WORLD / THURSDAY, 19 NOVEMBER 2026".

## What's in the image

The front page leads with the third strike on the Crimea Bridge — Ukraine hit the Kerch Bridge a third time in four days, halting rail traffic, hours before the Trump–Putin–Xi meeting in Shenzhen. The operation ran without Starlink, using drones to pass video to the missiles, and was timed as a symbolic gesture for the summit. Six more stories complete the day:

- Trump, Putin and Xi meet in Shenzhen — the first-ever trilateral of the three leaders, on the APEC sidelines.
- Anthropic's $107bn IPO — the biggest initial public offering of all time.
- Hakeem Jeffries set to become the first Black Speaker of the US House.
- GTA VI launches worldwide after thirteen years.
- NASA's Voyager 1 reaches one light-day from Earth, 49 years after launch.
- Myanmar faces a historic genocide verdict at the International Court of Justice.

## Run it

```sh
node main.ts
```

The rendered newspaper is written to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`). Running it twice produces a byte-identical file.

## How it works

`main.ts` (Node 22, standard library only, no network) reads `entry.png` from the repository root, validates that it is a real PNG, and writes it to the output directory (`MAKEFUN_OUTPUT_DIR`, or `/output` by default). All paths resolve relative to the script file, and the output is deterministic.

## Entry

This is an entry for the make.fun bounty: https://make.fun/bounty/news-image-20261119

## License

MIT — see [LICENSE](LICENSE).
