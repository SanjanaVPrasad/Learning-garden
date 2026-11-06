window.GARDEN_PRACTICE_QUESTIONS = [
  {
    "id": "variables-1",
    "topic": "variables",
    "type": "output",
    "prompt": "What is printed?",
    "code": "count = 3\ncount = count + 2\nprint(count)",
    "answer": "5",
    "hint": "Update count using its previous value.",
    "explanation": "The second assignment adds 2 to 3, so count becomes 5."
  },
  {
    "id": "variables-2",
    "topic": "variables",
    "type": "output",
    "prompt": "What is printed?",
    "code": "vendor = \"SAP\"\nprint(vendor)",
    "answer": "SAP",
    "hint": "print displays the text without its quotation marks.",
    "explanation": "Quotation marks create the string; print displays SAP."
  },
  {
    "id": "variables-3",
    "topic": "variables",
    "type": "output",
    "prompt": "What is printed?",
    "code": "price = 4\nquantity = 3\nprint(price * quantity)",
    "answer": "12",
    "hint": "Multiply the two values.",
    "explanation": "4 multiplied by 3 is 12."
  },
  {
    "id": "variables-4",
    "topic": "variables",
    "type": "output",
    "prompt": "What is printed?",
    "code": "first = 6\nsecond = first\nfirst = 9\nprint(second)",
    "answer": "6",
    "hint": "Changing first later does not reassign second.",
    "explanation": "second was assigned 6. Reassigning first to 9 leaves second at 6."
  },
  {
    "id": "variables-5",
    "topic": "variables",
    "type": "choice",
    "prompt": "Which line assigns an empty list to a variable?",
    "code": "",
    "choices": [
      "vendors = []",
      "vendors == []",
      "print(vendors)",
      "vendors = \"[]\""
    ],
    "answer": 0,
    "hint": "A list uses square brackets without quotes.",
    "explanation": "vendors = [] assigns an empty list. \"[]\" would be text, while == compares values."
  },
  {
    "id": "variables-6",
    "topic": "variables",
    "type": "output",
    "prompt": "What is printed?",
    "code": "print(2 ** 3)",
    "answer": "8",
    "hint": "** means exponentiation, not multiplication.",
    "explanation": "2 ** 3 means 2 × 2 × 2, which is 8."
  },
  {
    "id": "functions-1",
    "topic": "functions",
    "type": "output",
    "prompt": "What is printed?",
    "code": "def clean_vendor(name):\n    return name.lower()\n\nprint(clean_vendor(\"SAP\"))",
    "answer": "sap",
    "hint": "Trace the argument into name, then apply lower().",
    "explanation": "\"SAP\" is passed to name. lower() returns \"sap\", which print displays."
  },
  {
    "id": "functions-2",
    "topic": "functions",
    "type": "output",
    "prompt": "What is printed?",
    "code": "def add_fee(amount):\n    return amount + 5\n\nprint(add_fee(10))",
    "answer": "15",
    "hint": "Replace amount with 10.",
    "explanation": "The function returns 10 + 5, so print displays 15."
  },
  {
    "id": "functions-3",
    "topic": "functions",
    "type": "output",
    "prompt": "What is printed?",
    "code": "def double_count(n):\n    return n * 2\n\nprint(double_count(4))",
    "answer": "8",
    "hint": "n receives the argument 4.",
    "explanation": "The function returns 4 × 2, which is 8."
  },
  {
    "id": "functions-4",
    "topic": "functions",
    "type": "choice",
    "prompt": "Which keyword sends a value back to the caller?",
    "code": "",
    "choices": [
      "print",
      "return",
      "for",
      "in"
    ],
    "answer": 1,
    "hint": "Displaying a value and returning it are different actions.",
    "explanation": "return sends a value back to the caller. print displays a value."
  },
  {
    "id": "functions-5",
    "topic": "functions",
    "type": "output",
    "prompt": "What is printed?",
    "code": "def greet(name):\n    return \"Hi \" + name\n\nprint(greet(\"Sam\"))",
    "answer": "Hi Sam",
    "hint": "Keep the space at the end of \"Hi \".",
    "explanation": "The function joins \"Hi \" and \"Sam\", producing Hi Sam."
  },
  {
    "id": "functions-6",
    "topic": "functions",
    "type": "choice",
    "prompt": "What is the parameter name in this definition?",
    "code": "def count_items(items):\n    return len(items)",
    "choices": [
      "count_items",
      "items",
      "len",
      "return"
    ],
    "answer": 1,
    "hint": "The parameter is the name inside the definition’s parentheses.",
    "explanation": "items is the parameter. count_items is the function name; len is a built-in function."
  },
  {
    "id": "logic-1",
    "topic": "logic",
    "type": "output",
    "prompt": "What is printed?",
    "code": "count = 4\nif count > 3:\n    print(\"many\")\nelse:\n    print(\"few\")",
    "answer": "many",
    "hint": "Is 4 greater than 3?",
    "explanation": "The condition is true, so the if block prints many."
  },
  {
    "id": "logic-2",
    "topic": "logic",
    "type": "output",
    "prompt": "What is printed?",
    "code": "vendor = \"SAP\"\nprint(vendor == \"sap\")",
    "answer": "False",
    "hint": "String comparison is case-sensitive.",
    "explanation": "\"SAP\" and \"sap\" contain different uppercase/lowercase characters, so the comparison is False."
  },
  {
    "id": "logic-3",
    "topic": "logic",
    "type": "output",
    "prompt": "What is printed?",
    "code": "ready = True\nprint(not ready)",
    "answer": "False",
    "hint": "not reverses a Boolean value.",
    "explanation": "not True evaluates to False."
  },
  {
    "id": "logic-4",
    "topic": "logic",
    "type": "output",
    "prompt": "What is printed?",
    "code": "count = 2\nprint(count > 0 and count < 5)",
    "answer": "True",
    "hint": "Both comparisons must be true.",
    "explanation": "2 is greater than 0 and less than 5, so the result is True."
  },
  {
    "id": "logic-5",
    "topic": "logic",
    "type": "choice",
    "prompt": "Which operator compares two values for equality?",
    "code": "",
    "choices": [
      "=",
      "==",
      "!=",
      "**"
    ],
    "answer": 1,
    "hint": "Assignment uses one equals sign.",
    "explanation": "== compares values for equality; = assigns a value."
  },
  {
    "id": "logic-6",
    "topic": "logic",
    "type": "output",
    "prompt": "What is printed?",
    "code": "score = 5\nif score >= 5:\n    print(\"ready\")\nelse:\n    print(\"retry\")",
    "answer": "ready",
    "hint": ">= includes equality.",
    "explanation": "5 is equal to 5, so score >= 5 is true and ready is printed."
  },
  {
    "id": "loops-1",
    "topic": "loops",
    "type": "output",
    "prompt": "Write the two output lines.",
    "code": "for vendor in [\"SAP\", \"Oracle\"]:\n    print(vendor)",
    "answer": "SAP\nOracle",
    "hint": "The loop prints one list item per iteration.",
    "explanation": "The first iteration prints SAP; the second prints Oracle, on a new line."
  },
  {
    "id": "loops-2",
    "topic": "loops",
    "type": "output",
    "prompt": "What is printed?",
    "code": "total = 0\nfor n in [1, 2, 3]:\n    total = total + n\nprint(total)",
    "answer": "6",
    "hint": "Track total after each iteration: 1, then 3, then…",
    "explanation": "The loop adds 1 + 2 + 3. print is outside the loop and displays the final total, 6."
  },
  {
    "id": "loops-3",
    "topic": "loops",
    "type": "output",
    "prompt": "What is printed?",
    "code": "count = 0\nfor vendor in [\"SAP\", \"Oracle\", \"SAP\"]:\n    count = count + 1\nprint(count)",
    "answer": "3",
    "hint": "This counts entries, including repeats.",
    "explanation": "The loop runs three times. A repeated vendor still counts as an entry."
  },
  {
    "id": "loops-4",
    "topic": "loops",
    "type": "output",
    "prompt": "Write the three output lines.",
    "code": "for n in range(3):\n    print(n)",
    "answer": "0\n1\n2",
    "hint": "range(3) begins at 0 and stops before 3.",
    "explanation": "range(3) produces 0, 1 and 2. Each is printed on a separate line."
  },
  {
    "id": "loops-5",
    "topic": "loops",
    "type": "choice",
    "prompt": "Which instruction runs for every vendor?",
    "code": "for vendor in vendors:\n    print(vendor)\nprint(\"done\")",
    "choices": [
      "Only print(\"done\")",
      "Only print(vendor)",
      "Both print calls",
      "Neither print call"
    ],
    "answer": 1,
    "hint": "Look at which line is indented inside the loop.",
    "explanation": "print(vendor) is inside the loop. The unindented print(\"done\") runs after the loop."
  },
  {
    "id": "loops-6",
    "topic": "loops",
    "type": "output",
    "prompt": "What is printed?",
    "code": "cleaned = []\nfor name in [\"SAP\", \"ORACLE\"]:\n    cleaned.append(name.lower())\nprint(len(cleaned))",
    "answer": "2",
    "hint": "append adds one item on each iteration.",
    "explanation": "The loop adds two lowercase names. len(cleaned) counts the two items."
  },
  {
    "id": "strings-1",
    "topic": "strings",
    "type": "output",
    "prompt": "What is printed?",
    "code": "name = \"Oracle\"\nprint(name.lower())",
    "answer": "oracle",
    "hint": "lower() changes letters to lowercase.",
    "explanation": "The lowercase version of Oracle is oracle."
  },
  {
    "id": "strings-2",
    "topic": "strings",
    "type": "output",
    "prompt": "What is printed?",
    "code": "name = \"Microsoft Corp\"\nprint(name.replace(\" Corp\", \"\"))",
    "answer": "Microsoft",
    "hint": "The replacement removes the exact substring, including its leading space.",
    "explanation": "Replacing \" Corp\" with an empty string leaves Microsoft. This is a text rule, not proof of company identity."
  },
  {
    "id": "strings-3",
    "topic": "strings",
    "type": "output",
    "prompt": "What is printed?",
    "code": "name = \"SAP\"\nprint(len(name))",
    "answer": "3",
    "hint": "Count the characters in the string.",
    "explanation": "S, A and P make three characters."
  },
  {
    "id": "strings-4",
    "topic": "strings",
    "type": "output",
    "prompt": "What is printed?",
    "code": "print(\"AI\" + \" \" + \"agents\")",
    "answer": "AI agents",
    "hint": "+ joins strings, including the middle space.",
    "explanation": "The three strings join into AI agents."
  },
  {
    "id": "strings-5",
    "topic": "strings",
    "type": "output",
    "prompt": "What is printed?",
    "code": "name = \"SAP\"\nname.lower()\nprint(name)",
    "answer": "SAP",
    "hint": "Was the returned lowercase string assigned back to name?",
    "explanation": "Strings are immutable. lower() returns a new string; name still refers to \"SAP\" because it was not reassigned."
  },
  {
    "id": "strings-6",
    "topic": "strings",
    "type": "output",
    "prompt": "What is printed?",
    "code": "name = \"  SAP  \"\nprint(name.strip())",
    "answer": "SAP",
    "hint": "strip() removes whitespace from the ends.",
    "explanation": "The leading and trailing spaces are removed, leaving SAP."
  },
  {
    "id": "lists-1",
    "topic": "lists",
    "type": "output",
    "prompt": "What is printed?",
    "code": "vendors = [\"SAP\", \"Oracle\"]\nvendors.append(\"Microsoft\")\nprint(len(vendors))",
    "answer": "3",
    "hint": "Start with two items, then add one.",
    "explanation": "append adds Microsoft as a third item, so len returns 3."
  },
  {
    "id": "lists-2",
    "topic": "lists",
    "type": "output",
    "prompt": "What is printed?",
    "code": "vendors = [\"SAP\", \"Oracle\", \"SAP\"]\nprint(len(set(vendors)))",
    "answer": "2",
    "hint": "set keeps distinct values.",
    "explanation": "The two exact unique strings are SAP and Oracle. The set has length 2."
  },
  {
    "id": "lists-3",
    "topic": "lists",
    "type": "output",
    "prompt": "What is printed?",
    "code": "vendors = [\"Microsoft\", \"Microsoft Corp\", \"Microsoft\"]\nprint(len(set(vendors)))",
    "answer": "2",
    "hint": "set compares the actual text, not company identities.",
    "explanation": "\"Microsoft\" and \"Microsoft Corp\" are distinct strings, even if you suspect they refer to the same company."
  },
  {
    "id": "lists-4",
    "topic": "lists",
    "type": "output",
    "prompt": "What is printed?",
    "code": "vendors = [\"SAP\", \"Oracle\"]\nprint(vendors[0])",
    "answer": "SAP",
    "hint": "List indexing begins at zero.",
    "explanation": "Index 0 refers to the first list item, SAP."
  },
  {
    "id": "lists-5",
    "topic": "lists",
    "type": "choice",
    "prompt": "Which statement about a set is correct?",
    "code": "",
    "choices": [
      "It guarantees alphabetical order",
      "It stores only unique values",
      "It proves similar names are one company",
      "It changes every string to lowercase"
    ],
    "answer": 1,
    "hint": "Think about exact duplicates.",
    "explanation": "A set keeps unique values. It does not guarantee alphabetical order or determine company identity."
  },
  {
    "id": "lists-6",
    "topic": "lists",
    "type": "output",
    "prompt": "What is printed?",
    "code": "vendors = []\nvendors.append(\"SAP\")\nvendors.append(\"SAP\")\nprint(len(vendors))",
    "answer": "2",
    "hint": "A list can contain duplicates.",
    "explanation": "append adds an item each time. This list contains two entries, both SAP."
  }
];
