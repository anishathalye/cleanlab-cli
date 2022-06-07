window.BENCHMARK_DATA = {
  "lastUpdate": 1654583650474,
  "repoUrl": "https://github.com/cleanlab/cleanlab-cli",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "efee922a68595bad8fa337ac064649eaf594067e",
          "message": "Update benchmarking.yml",
          "timestamp": "2022-06-03T14:20:50-04:00",
          "tree_id": "816dc0dd742a67d881b5e39020d81e333fe386a2",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/efee922a68595bad8fa337ac064649eaf594067e"
        },
        "date": 1654280837017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 0.09932484329112731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.067974606000007 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 0.09576308086008954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.442437639000005 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.06653400548010074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.029908282000008 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.01489571512300179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.13339989000002 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "de55088dcba15a3fef96418bcba07172d6e6f9a3",
          "message": "test gh-pages",
          "timestamp": "2022-06-03T16:13:59-04:00",
          "tree_id": "5dd21a5335d22a0b50e0e705773487c5511ae275",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/de55088dcba15a3fef96418bcba07172d6e6f9a3"
        },
        "date": 1654287489656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.8223076030952,
            "unit": "iter/sec",
            "range": "stddev: 0.006704996712748292",
            "extra": "mean: 56.10945688235849 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.2695755269479716,
            "unit": "iter/sec",
            "range": "stddev: 0.020845888359361863",
            "extra": "mean: 440.6110253333395 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.2003697041046669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.990774450999993 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.018060444573412354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.369622599000024 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "801c35bf0f7a95875c51fdbf04e19cd81a746637",
          "message": "Update schema_helpers.py",
          "timestamp": "2022-06-03T16:27:35-04:00",
          "tree_id": "fcd8a9891eaa4be8bddb8e519a56c8a1ebb87d73",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/801c35bf0f7a95875c51fdbf04e19cd81a746637"
        },
        "date": 1654288214246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 0.09932862356970189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.067591436000015 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 0.09572594804578366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.446488339000013 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.06646321645153391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.045916423999984 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "ba65af53ea2545e28c08051fbf3bf4419a053cbc",
          "message": "Revert \"Update schema_helpers.py\"\n\nThis reverts commit 801c35bf0f7a95875c51fdbf04e19cd81a746637.",
          "timestamp": "2022-06-03T16:38:06-04:00",
          "tree_id": "47b8d1b5c9de76a154de2b91a63866ba7d0b0c67",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/ba65af53ea2545e28c08051fbf3bf4419a053cbc"
        },
        "date": 1654288754807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.766790720076802,
            "unit": "iter/sec",
            "range": "stddev: 0.006691069833662203",
            "extra": "mean: 56.28478523529753 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.2735608996670478,
            "unit": "iter/sec",
            "range": "stddev: 0.01756304274726995",
            "extra": "mean: 439.8386690000014 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.1998625623504846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.003438303999985 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cleanlab",
            "username": "cleanlab"
          },
          "committer": {
            "name": "cleanlab",
            "username": "cleanlab"
          },
          "id": "ba65af53ea2545e28c08051fbf3bf4419a053cbc",
          "message": "Benchmark performance regression alerts and charts",
          "timestamp": "2022-05-24T17:06:46Z",
          "url": "https://github.com/cleanlab/cleanlab-cli/pull/8/commits/ba65af53ea2545e28c08051fbf3bf4419a053cbc"
        },
        "date": 1654288937672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.502368416304726,
            "unit": "iter/sec",
            "range": "stddev: 0.0057178089782241185",
            "extra": "mean: 60.5973624375018 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.2311059382077123,
            "unit": "iter/sec",
            "range": "stddev: 0.031165569453342944",
            "extra": "mean: 448.2082104999989 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.19652145875241514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.088502835 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74d82da328ab4b4779721a418fb34ffbca1311f8",
          "message": "Benchmark performance regression alerts and charts (#8)\n\n* alert on failure\r\n\r\n* temp commit to test alert\r\n\r\n* Revert \"temp commit to test alert\"\r\n\r\nThis reverts commit 36ba821af7e61bdfcc6f14e16e42cc2dad718a4e.\r\n\r\n* Revert \"Revert \"temp commit to test alert\"\"\r\n\r\nThis reverts commit 912f59f16dfbe35426cfd40ec1dd06fec70b5b43.\r\n\r\n* Update benchmarking.yml\r\n\r\n* del output.json\r\n\r\n* Update benchmarking.yml\r\n\r\n* test gh-pages\r\n\r\n* no 1G test\r\n\r\n* Update schema_helpers.py\r\n\r\n* Revert \"Update schema_helpers.py\"\r\n\r\nThis reverts commit 801c35bf0f7a95875c51fdbf04e19cd81a746637.",
          "timestamp": "2022-06-03T16:51:49-04:00",
          "tree_id": "47b8d1b5c9de76a154de2b91a63866ba7d0b0c67",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/74d82da328ab4b4779721a418fb34ffbca1311f8"
        },
        "date": 1654289578757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.58966060214993,
            "unit": "iter/sec",
            "range": "stddev: 0.006279989707955956",
            "extra": "mean: 56.85158017646874 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.254111242501027,
            "unit": "iter/sec",
            "range": "stddev: 0.020698997217719454",
            "extra": "mean: 443.6338283333612 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.1987058565749477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.03256429999999 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74d82da328ab4b4779721a418fb34ffbca1311f8",
          "message": "Benchmark performance regression alerts and charts (#8)\n\n* alert on failure\r\n\r\n* temp commit to test alert\r\n\r\n* Revert \"temp commit to test alert\"\r\n\r\nThis reverts commit 36ba821af7e61bdfcc6f14e16e42cc2dad718a4e.\r\n\r\n* Revert \"Revert \"temp commit to test alert\"\"\r\n\r\nThis reverts commit 912f59f16dfbe35426cfd40ec1dd06fec70b5b43.\r\n\r\n* Update benchmarking.yml\r\n\r\n* del output.json\r\n\r\n* Update benchmarking.yml\r\n\r\n* test gh-pages\r\n\r\n* no 1G test\r\n\r\n* Update schema_helpers.py\r\n\r\n* Revert \"Update schema_helpers.py\"\r\n\r\nThis reverts commit 801c35bf0f7a95875c51fdbf04e19cd81a746637.",
          "timestamp": "2022-06-03T16:51:49-04:00",
          "tree_id": "47b8d1b5c9de76a154de2b91a63866ba7d0b0c67",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/74d82da328ab4b4779721a418fb34ffbca1311f8"
        },
        "date": 1654291572297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.647904555084466,
            "unit": "iter/sec",
            "range": "stddev: 0.006926423017429656",
            "extra": "mean: 56.66395105881814 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.2658053848970985,
            "unit": "iter/sec",
            "range": "stddev: 0.021116990004975716",
            "extra": "mean: 441.34417133332704 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.20091871848091716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.977137061000008 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "e35338bf3682e1af280c8c266ea43cac92216b9d",
          "message": "implemented reservoir sampling",
          "timestamp": "2022-06-03T19:34:50-04:00",
          "tree_id": "0cba73209c09c9ac45ba78245204fb9907cc72a0",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/e35338bf3682e1af280c8c266ea43cac92216b9d"
        },
        "date": 1654299367931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 12.133108499283528,
            "unit": "iter/sec",
            "range": "stddev: 0.005705082730197958",
            "extra": "mean: 82.41910966666548 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 1.7614688698667311,
            "unit": "iter/sec",
            "range": "stddev: 0.03955851399566432",
            "extra": "mean: 567.7080174999958 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.2849959675464556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5088215760000026 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cleanlab",
            "username": "cleanlab"
          },
          "committer": {
            "name": "cleanlab",
            "username": "cleanlab"
          },
          "id": "e35338bf3682e1af280c8c266ea43cac92216b9d",
          "message": "Reservoir sampling",
          "timestamp": "2022-05-24T17:06:46Z",
          "url": "https://github.com/cleanlab/cleanlab-cli/pull/9/commits/e35338bf3682e1af280c8c266ea43cac92216b9d"
        },
        "date": 1654299469562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.696226204468092,
            "unit": "iter/sec",
            "range": "stddev: 0.004306872065188072",
            "extra": "mean: 63.70958133333601 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.252256006012223,
            "unit": "iter/sec",
            "range": "stddev: 0.024335398096823026",
            "extra": "mean: 443.9992600000077 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.3445149131440001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9026319669999907 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "b5327340a1b805c34ccbda6efb079b16c388400f",
          "message": "Update schema_helpers.py",
          "timestamp": "2022-06-03T19:37:14-04:00",
          "tree_id": "f36b219de194867f9d364ec9e9e1f63f4353ad6e",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/b5327340a1b805c34ccbda6efb079b16c388400f"
        },
        "date": 1654299493639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.971261464449332,
            "unit": "iter/sec",
            "range": "stddev: 0.0066946299922515",
            "extra": "mean: 71.57549821428485 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.577279179256859,
            "unit": "iter/sec",
            "range": "stddev: 0.004265031508898312",
            "extra": "mean: 388.0060833333327 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.39017083352924875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.562979889999994 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cleanlab",
            "username": "cleanlab"
          },
          "committer": {
            "name": "cleanlab",
            "username": "cleanlab"
          },
          "id": "b5327340a1b805c34ccbda6efb079b16c388400f",
          "message": "Reservoir sampling",
          "timestamp": "2022-05-24T17:06:46Z",
          "url": "https://github.com/cleanlab/cleanlab-cli/pull/9/commits/b5327340a1b805c34ccbda6efb079b16c388400f"
        },
        "date": 1654299499507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.095323465570182,
            "unit": "iter/sec",
            "range": "stddev: 0.004461964210963081",
            "extra": "mean: 66.24568213333266 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.7336081574192077,
            "unit": "iter/sec",
            "range": "stddev: 0.004345065074918982",
            "extra": "mean: 365.8168773333254 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.399641092725293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5022451849999925 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "229547c7cbdf0885d55bde6ee0d9231a8da639f3",
          "message": "Reservoir sampling (#9)\n\n* implemented reservoir sampling\r\n\r\n* Update schema_helpers.py",
          "timestamp": "2022-06-03T19:48:49-04:00",
          "tree_id": "f36b219de194867f9d364ec9e9e1f63f4353ad6e",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/229547c7cbdf0885d55bde6ee0d9231a8da639f3"
        },
        "date": 1654300188586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.99699607169248,
            "unit": "iter/sec",
            "range": "stddev: 0.005285127033224984",
            "extra": "mean: 66.68002013333498 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.758107813483709,
            "unit": "iter/sec",
            "range": "stddev: 0.002205909973132001",
            "extra": "mean: 362.5674076666788 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.39808035747386494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5120556220000196 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "a6d133bdda6d82f25ebc6c5a22710ef035d3d2d7",
          "message": "remove redundant pull_request",
          "timestamp": "2022-06-03T19:50:31-04:00",
          "tree_id": "fa0620012282daf5671c412beae3c4245dcc2e02",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/a6d133bdda6d82f25ebc6c5a22710ef035d3d2d7"
        },
        "date": 1654300292413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.659376359156726,
            "unit": "iter/sec",
            "range": "stddev: 0.007256693592410792",
            "extra": "mean: 68.21572592857044 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.725861618098621,
            "unit": "iter/sec",
            "range": "stddev: 0.003459771644339471",
            "extra": "mean: 366.8564806666647 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.3955062381881876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.528405126000024 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "e1da81c95f475d7111a10230dadabeb2555b53b7",
          "message": "cap max_rows_checked to 200K",
          "timestamp": "2022-06-04T01:00:27-04:00",
          "tree_id": "8307d00d18de9e36ff7e3dc20eed2bb02eb05077",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/e1da81c95f475d7111a10230dadabeb2555b53b7"
        },
        "date": 1654318888026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 11.698850599944755,
            "unit": "iter/sec",
            "range": "stddev: 0.007417143854590601",
            "extra": "mean: 85.47848281819431 msec\nrounds: 11"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.1551525188866547,
            "unit": "iter/sec",
            "range": "stddev: 0.002345695418867741",
            "extra": "mean: 464.0042833333193 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.6391027030770728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5646937420000313 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72f8e4aa41b2aa32298903cccd11c0c58d5ecef8",
          "message": "Cap number of rows in Datasets sampled from to 200K (#10)",
          "timestamp": "2022-06-04T01:12:25-04:00",
          "tree_id": "8307d00d18de9e36ff7e3dc20eed2bb02eb05077",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/72f8e4aa41b2aa32298903cccd11c0c58d5ecef8"
        },
        "date": 1654319599350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 12.755041153390613,
            "unit": "iter/sec",
            "range": "stddev: 0.00743123395305415",
            "extra": "mean: 78.4003742500019 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.3719276367951547,
            "unit": "iter/sec",
            "range": "stddev: 0.008116847388256791",
            "extra": "mean: 421.59802200001195 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7020637241099295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.424372126999998 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "effa704ed29b1c2daadb6ca90ee409898e7bb134",
          "message": "Add link to performance benchmarks",
          "timestamp": "2022-06-04T01:14:14-04:00",
          "tree_id": "56e6e4bbf7fdceb155efd8c1226c3e6f51690fb3",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/effa704ed29b1c2daadb6ca90ee409898e7bb134"
        },
        "date": 1654319708378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 16.814684530513237,
            "unit": "iter/sec",
            "range": "stddev: 0.006031821792417264",
            "extra": "mean: 59.47182643750004 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.7178980569329063,
            "unit": "iter/sec",
            "range": "stddev: 0.0034850057385878066",
            "extra": "mean: 367.9313863333344 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7984039630128404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2524987930000009 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "df17c2fee888c5a25806960013e06213ea4ebd8f",
          "message": "Merge branch 'main' of https://github.com/cleanlab/cleanlab-cli",
          "timestamp": "2022-06-04T01:15:14-04:00",
          "tree_id": "e12ea4f48bbf2a7af16ec20ef914034d8f898ce3",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/df17c2fee888c5a25806960013e06213ea4ebd8f"
        },
        "date": 1654319800933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 15.753901457633656,
            "unit": "iter/sec",
            "range": "stddev: 0.00440327596976551",
            "extra": "mean: 63.47633966666991 msec\nrounds: 15"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.8874998331386683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712680335220947",
            "extra": "mean: 346.3203663333256 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.830982772528849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.203394381999999 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.8445774091562884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1840240920000156 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "6c06c9698faf933918e211c882b7aeb177df98bf",
          "message": "fix value type when ints/floats are loaded as strings",
          "timestamp": "2022-06-04T14:11:17-04:00",
          "tree_id": "7bc8d70b52de66925598541c32a4f5902b60e6f7",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/6c06c9698faf933918e211c882b7aeb177df98bf"
        },
        "date": 1654366385406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 10.306226071352139,
            "unit": "iter/sec",
            "range": "stddev: 0.01244367015050622",
            "extra": "mean: 97.02872740000004 msec\nrounds: 10"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.0877983162106926,
            "unit": "iter/sec",
            "range": "stddev: 0.0038036241352882453",
            "extra": "mean: 478.9734680000019 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.6483538276541058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.542367697000003 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.6701079187694685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.492296945000021 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "eeca13863e7c9160492b2cc156a3d2496456f963",
          "message": "fix typo",
          "timestamp": "2022-06-04T17:19:48-04:00",
          "tree_id": "66d9762fdc90322348c63a30e74dad7c3811d274",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/eeca13863e7c9160492b2cc156a3d2496456f963"
        },
        "date": 1654377674763,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.7418549534982,
            "unit": "iter/sec",
            "range": "stddev: 0.009017607601668129",
            "extra": "mean: 72.77037949999864 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.5923081843809554,
            "unit": "iter/sec",
            "range": "stddev: 0.0199720933160885",
            "extra": "mean: 385.75660333333417 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7706403635253021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2976221429999981 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7804214685963874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2813589069999978 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9d9ed718f79a2f67f6160b807e3b4b5dde50726",
          "message": "Read streaming array instead of records (#11)\n\n* optimize ExcelDataset to get values array\r\n\r\n* optimize propose_schema to read_streaming_values\r\n\r\n* fix typo",
          "timestamp": "2022-06-04T17:43:14-04:00",
          "tree_id": "66d9762fdc90322348c63a30e74dad7c3811d274",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/a9d9ed718f79a2f67f6160b807e3b4b5dde50726"
        },
        "date": 1654379076489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.373779130343369,
            "unit": "iter/sec",
            "range": "stddev: 0.007390629706975518",
            "extra": "mean: 69.57112607142945 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.6990926662616057,
            "unit": "iter/sec",
            "range": "stddev: 0.018700166990109866",
            "extra": "mean: 370.49487499999617 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7827776707368466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2775019489999977 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7895813926705825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2664938779999915 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "6aae8553f3e8e775bb6bcc311dee3ea8f60ac378",
          "message": "read json with 'rb' for ijson",
          "timestamp": "2022-06-04T17:43:54-04:00",
          "tree_id": "6939d2a20add5060cdd1da27a9ffc1f2d10950df",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/6aae8553f3e8e775bb6bcc311dee3ea8f60ac378"
        },
        "date": 1654379111268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.927396175193573,
            "unit": "iter/sec",
            "range": "stddev: 0.0075752216318560215",
            "extra": "mean: 71.80093015384486 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.6998762387531396,
            "unit": "iter/sec",
            "range": "stddev: 0.0065810703527042266",
            "extra": "mean: 370.38734800000367 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7485300329785872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3359517399999987 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.759287450913328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.317024269000001 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "1fb7a1cebbc23c6231341bde2fb75b5f8c6c1a48",
          "message": "Update api_service.py",
          "timestamp": "2022-06-06T18:21:27-04:00",
          "tree_id": "2c7252a84734a615bc79296569b9fb8f999a500b",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/1fb7a1cebbc23c6231341bde2fb75b5f8c6c1a48"
        },
        "date": 1654554165778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.32967405568035,
            "unit": "iter/sec",
            "range": "stddev: 0.006037533235879076",
            "extra": "mean: 57.70448981250276 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.2741441440207475,
            "unit": "iter/sec",
            "range": "stddev: 0.011965142215500784",
            "extra": "mean: 305.4233277500025 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9352706409675646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0692092280000054 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9449974872138752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.058203872000007 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "3a6ebd30c33d626955f330479bb3c67a32ca341b",
          "message": "fix download for json",
          "timestamp": "2022-06-06T18:32:55-04:00",
          "tree_id": "30e809271b42c5fd8c17aea15a3b6deaddd302d0",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/3a6ebd30c33d626955f330479bb3c67a32ca341b"
        },
        "date": 1654554872826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 20.047458813506225,
            "unit": "iter/sec",
            "range": "stddev: 0.0051498735720773865",
            "extra": "mean: 49.88163384210509 msec\nrounds: 19"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 31.669027234371892,
            "unit": "iter/sec",
            "range": "stddev: 0.0036706481769657523",
            "extra": "mean: 31.576593515150748 msec\nrounds: 33"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 4.0094314819012045,
            "unit": "iter/sec",
            "range": "stddev: 0.004148857927540326",
            "extra": "mean: 249.41191900000172 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 4.555648234954678,
            "unit": "iter/sec",
            "range": "stddev: 0.012753223977326603",
            "extra": "mean: 219.5077293999958 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 1.1130715931717095,
            "unit": "iter/sec",
            "range": "stddev: 0.007326713076221344",
            "extra": "mean: 898.4148064999929 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.6819027833268173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.4664847020000025 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 1.1087388135079315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007603964695358503",
            "extra": "mean: 901.9256725000062 msec\nrounds: 2"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.6507502966106817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.5366877360000046 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "5289f59321c20d40f7250ce0ddde2a17a7706d17",
          "message": "experiment -> cleanset",
          "timestamp": "2022-06-07T01:12:34-04:00",
          "tree_id": "2caa32c60488bb23b6c30e8cdca06a0a4d425174",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/5289f59321c20d40f7250ce0ddde2a17a7706d17"
        },
        "date": 1654578865784,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 14.684127940793235,
            "unit": "iter/sec",
            "range": "stddev: 0.007510212808002377",
            "extra": "mean: 68.10074142856999 msec\nrounds: 14"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 21.720361681379455,
            "unit": "iter/sec",
            "range": "stddev: 0.00651146751405858",
            "extra": "mean: 46.03974900000331 msec\nrounds: 21"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.876843919942984,
            "unit": "iter/sec",
            "range": "stddev: 0.0022182342049860662",
            "extra": "mean: 347.60314700000094 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.3682485756131064,
            "unit": "iter/sec",
            "range": "stddev: 0.01637273583206248",
            "extra": "mean: 296.8902020000037 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.7770339721094257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2869450189999867 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.47223026860623707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.117610976000009 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.803045796594384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.245258992999993 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.475004216042425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.105244471999981 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "Caleb Chiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab9e36a67a46a7454a4c26e35ea49c7497a2ab92",
          "message": "experiment -> cleanset (#12)",
          "timestamp": "2022-06-07T01:26:32-04:00",
          "tree_id": "2caa32c60488bb23b6c30e8cdca06a0a4d425174",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/ab9e36a67a46a7454a4c26e35ea49c7497a2ab92"
        },
        "date": 1654579719023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 17.710701733818254,
            "unit": "iter/sec",
            "range": "stddev: 0.005484167044338275",
            "extra": "mean: 56.46303658824081 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 27.39025654249683,
            "unit": "iter/sec",
            "range": "stddev: 0.003913670285360107",
            "extra": "mean: 36.50933310713863 msec\nrounds: 28"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 3.4159683256728544,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111722819794867",
            "extra": "mean: 292.7427612499969 msec\nrounds: 4"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.949333229924142,
            "unit": "iter/sec",
            "range": "stddev: 0.0116509133558905",
            "extra": "mean: 253.2072989999904 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.9607782891369618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0408228530000088 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.5765347113890432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.734500942000011 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.9369570377885822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0672847950000062 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.5484547933100994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8233043309999744 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "committer": {
            "email": "calebchiam@gmail.com",
            "name": "calebchiam",
            "username": "calebchiam"
          },
          "distinct": true,
          "id": "4224dc724bb2cc8481c39d74d3a8d027dd0a61dc",
          "message": "--all flag to allow downloading of all Cleanlab columns",
          "timestamp": "2022-06-07T02:31:31-04:00",
          "tree_id": "fa6ff61345f0a7ee2461ab511dfce8768d321843",
          "url": "https://github.com/cleanlab/cleanlab-cli/commit/4224dc724bb2cc8481c39d74d3a8d027dd0a61dc"
        },
        "date": 1654583649469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_generate_schema[1M-csv]",
            "value": 13.988630409213084,
            "unit": "iter/sec",
            "range": "stddev: 0.006306079259811873",
            "extra": "mean: 71.48662669230205 msec\nrounds: 13"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1M-json]",
            "value": 20.88093422878356,
            "unit": "iter/sec",
            "range": "stddev: 0.005010063869639946",
            "extra": "mean: 47.89057754999959 msec\nrounds: 20"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-csv]",
            "value": 2.771196706482218,
            "unit": "iter/sec",
            "range": "stddev: 0.013120608314742639",
            "extra": "mean: 360.8549323333345 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[10M-json]",
            "value": 3.0771632471474666,
            "unit": "iter/sec",
            "range": "stddev: 0.011536963110779161",
            "extra": "mean: 324.97463400000015 msec\nrounds: 3"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-csv]",
            "value": 0.8004041650436169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2493688110000107 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[100M-json]",
            "value": 0.4614457903032826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1671017940000183 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-csv]",
            "value": 0.7988806084913744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2517515000000117 sec\nrounds: 1"
          },
          {
            "name": "tests/bench.py::test_generate_schema[1G-json]",
            "value": 0.43704463333570953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.288095822999992 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}