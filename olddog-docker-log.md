## Prepare

Prepare an image for running experiments:

    python3 run.py prepare --repo osirrc2019/olddog --collections core18=/export/data/ir/WashingtonPost.v2/data=json

Results log of using the `jig` for the above `prepare` command:

```
Preparing image...
Logs for init and index in container with ID e7ad404422a822d3b927aecedc64bff2ab5aeb08f116150861486ffa572b97c0...
Downloading anserini.jar...
Downloading OldDog...
Building OldDog...
created database in maintenance mode: core18
taken database out of maintenance mode: core18
2019-10-07 08:36:49,336 INFO  [main] index.IndexCollection (IndexCollection.java:429) - DocumentCollection path: /input/collections/core18
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:430) - Index path: core18
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:431) - CollectionClass: WashingtonPostCollection
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:432) - Generator: WapoGenerator
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:433) - Threads: 1
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:434) - Stemmer: porter
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:435) - Keep stopwords? false
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:436) - Store positions? true
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:437) - Store docvectors? true
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:438) - Store transformed docs? false
2019-10-07 08:36:49,337 INFO  [main] index.IndexCollection (IndexCollection.java:439) - Store raw docs? true
2019-10-07 08:36:49,338 INFO  [main] index.IndexCollection (IndexCollection.java:440) - Optimize (merge segments)? false
2019-10-07 08:36:49,338 INFO  [main] index.IndexCollection (IndexCollection.java:441) - Whitelist: null
2019-10-07 08:36:49,338 INFO  [main] index.IndexCollection (IndexCollection.java:442) - Solr? false
2019-10-07 08:36:49,338 INFO  [main] index.IndexCollection (IndexCollection.java:453) - Dry run (no index created)? false
2019-10-07 08:36:49,348 INFO  [main] index.IndexCollection (IndexCollection.java:536) - Starting indexer...
2019-10-07 08:36:49,520 INFO  [main] index.IndexCollection (IndexCollection.java:563) - 1 files found in /input/collections/core18
2019-10-07 08:37:49,523 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:38:49,523 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:39:49,524 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:40:49,525 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:41:49,525 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:42:49,525 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:43:49,526 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:44:49,526 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:45:49,526 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:46:49,527 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:47:49,527 INFO  [main] index.IndexCollection (IndexCollection.java:577) - 0.00 percent completed
2019-10-07 08:48:44,451 INFO  [pool-2-thread-1] index.IndexCollection$LocalIndexerThread (IndexCollection.java:295) - core18/TREC_Washington_Post_collection.v2.jl: 595037 docs added.
2019-10-07 08:49:22,708 INFO  [main] index.IndexCollection (IndexCollection.java:638) - # Final Counter Values
2019-10-07 08:49:22,708 INFO  [main] index.IndexCollection (IndexCollection.java:639) - indexed:          595,037
2019-10-07 08:49:22,708 INFO  [main] index.IndexCollection (IndexCollection.java:640) - empty:                  0
2019-10-07 08:49:22,708 INFO  [main] index.IndexCollection (IndexCollection.java:641) - unindexed:              0
2019-10-07 08:49:22,709 INFO  [main] index.IndexCollection (IndexCollection.java:642) - unindexable:            0
2019-10-07 08:49:22,709 INFO  [main] index.IndexCollection (IndexCollection.java:643) - skipped:                0
2019-10-07 08:49:22,709 INFO  [main] index.IndexCollection (IndexCollection.java:644) - errors:                 0
2019-10-07 08:49:22,716 INFO  [main] index.IndexCollection (IndexCollection.java:647) - Total 595,037 documents indexed in 00:12:33
CREATE DATABASE core18
CONNECT TO core18
CREATE TABLES
LOAD DATA
DATA LOADED
Committing image...
Building OldDog...
created database in maintenance mode: core18
taken database out of maintenance mode: core18
```
