module.exports = { translateICMPCode }

function translateICMPCode (type, code) {
  const typeCodeTable = {
    0: {
      0: "Echo reply"
    },
    1: {},
    2: {},
    3: {
      0: "Destination network unreachable",
      1: "Destination host unreachable",
      2: "Destination protocol unreachable",
      3: "Destination port unreachable",
      4: "Fragmentation required, and DF flag set",
      5: "Source route failed",
      6: "Destination network unknown",
      7: "Destination host unknown",
      8: "Source host isolated",
      9: "Network administratively prohibited",
      10: "Host administratively prohibited",
      11: "Network unreachable for ToS",
      12: "Host unreachable for ToS",
      13: "Communication administratively prohibited",
      14: "Host Precedence Violation",
      15: "Precedence cutoff in effect"
    },
    4: {
      0: "Source quench (deprecated)"
    },
    5: {
      0: "Redirect Datagram for the Network",
      1: "Redirect Datagram for the Host",
      2: "Redirect Datagram for the ToS & network",
      3: "Redirect Datagram for the ToS & host"
    },
    6: {},
    7: {},
    8: { 0: "Echo request" },
    9: { 0: "Router Advertisement" },
    10: { 0: "Router discovery/selection/solicitation" },
    11: { 0: "TTL expired in transit", 1: "Fragment reassembly time exceeded" },
    12: {
      0: "Pointer indicates the error",
      1: "Missing a required option",
      2: "Bad length"
    },
    13: { 0: "Timestamp" },
    14: { 0: "Timestamp reply" },
    15: {},
    16: {},
    17: {},
    18: {},
    19: {},
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    31: {},
    32: {},
    33: {},
    34: {},
    35: {},
    36: {},
    37: {},
    38: {},
    39: {},
    40: {},
    41: {},
    42: { 0: "Request Extended Echo" },
    43: {
      0: "No Error",
      1: "Malformed Query",
      2: "No Such Interface",
      3: "No Such Table Entry",
      4: "Multiple Interfaces Satisfy Query"
    },
    44: {},
  }
  return typeCodeTable[type][code]
}
