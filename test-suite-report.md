
## SOLID-TEST-SUITE REPORT                                         

### 1. SUMMARY by testFile

- crud-results.json

  CSS               

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         SHOULD      {"passed":25,"failed":6,"pending":0,"total":31}
         WPS         {"passed":17,"failed":10,"pending":0,"total":27}
         total       {"passed":44,"failed":16,"pending":0,"total":60}
  ESS               

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         SHOULD      {"passed":22,"failed":9,"pending":0,"total":31}
         WPS         {"passed":0,"failed":0,"pending":27,"total":27}
         total       {"passed":22,"failed":9,"pending":29,"total":60}
  NSS               

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         SHOULD      {"passed":25,"failed":6,"pending":0,"total":31}
         WPS         {"passed":18,"failed":9,"pending":0,"total":27}
         total       {"passed":45,"failed":15,"pending":0,"total":60}

- wac-results.json

  CSS               

         SHOULD      {"passed":61,"failed":22,"pending":0,"total":83}
         total       {"passed":61,"failed":22,"pending":0,"total":83}
  ESS               

         SHOULD      {"passed":61,"failed":22,"pending":0,"total":83}
         total       {"passed":61,"failed":22,"pending":0,"total":83}
  NSS               

         SHOULD      {"passed":67,"failed":16,"pending":0,"total":83}
         total       {"passed":67,"failed":16,"pending":0,"total":83}

### 2. SUMMARY by server

- CSS

  crud-results.json 

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         SHOULD      {"passed":25,"failed":6,"pending":0,"total":31}
         WPS         {"passed":17,"failed":10,"pending":0,"total":27}
         total       {"passed":44,"failed":16,"pending":0,"total":60}
  wac-results.json  

         SHOULD      {"passed":61,"failed":22,"pending":0,"total":83}
         total       {"passed":61,"failed":22,"pending":0,"total":83}

- ESS

  crud-results.json 

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         SHOULD      {"passed":22,"failed":9,"pending":0,"total":31}
         WPS         {"passed":0,"failed":0,"pending":27,"total":27}
         total       {"passed":22,"failed":9,"pending":29,"total":60}
  wac-results.json  

         SHOULD      {"passed":61,"failed":22,"pending":0,"total":83}
         total       {"passed":61,"failed":22,"pending":0,"total":83}

- NSS

  crud-results.json 

         MAY         {"passed":2,"failed":0,"pending":0,"total":2}
         SHOULD      {"passed":25,"failed":6,"pending":0,"total":31}
         WPS         {"passed":18,"failed":9,"pending":0,"total":27}
         total       {"passed":45,"failed":15,"pending":0,"total":60}
  wac-results.json  

         SHOULD      {"passed":67,"failed":16,"pending":0,"total":83}
         total       {"passed":67,"failed":16,"pending":0,"total":83}

### 3. UNIT TESTS by testFile and level

crud-results.json                                               CSS           ESS           NSS           

 MAY
  - Alice's pod

    - Get RDFa > As JSON-LD
    <table><tbody><tr><td><a #A001>A001 </td><td width=400> Triples</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Get RDFa > As Turtle
    <table><tbody><tr><td><a #A002>A002 </td><td width=400> Triples</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

                    MAY results                                 2/0/0/2       0/0/2/2       2/0/0/2       

 SHOULD
  - Create non-container

    - in an existing container > using POST
    <table><tbody><tr><td><a #T001>T001 </td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T002>T002 </td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    - in an existing container > using PUT
    <table><tbody><tr><td><a #T004>T004 </td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T005>T005 </td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - in an existing container > using PATCH
    <table><tbody><tr><td><a #T008>T008 </td><td width=400> creates the resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T009>T009 </td><td width=400> adds the resource in the container listing</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>

    - in a non-existing container > using PUT
    <table><tbody><tr><td><a #T012>T012 </td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T013>T013 </td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - in a non-existing container > using PATCH
    <table><tbody><tr><td><a #T017>T017 </td><td width=400> creates the resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T018>T018 </td><td width=400> adds the resource in the container listing</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
  - Update

    - Using PUT, overwriting plain text with plain text
    <table><tbody><tr><td><a #T022>T022 </td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Using PUT, overwriting Turtle with Turtle
    <table><tbody><tr><td><a #T024>T024 </td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    - Using PUT (same Turtle content)
    <table><tbody><tr><td><a #T026>T026 </td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH to add triple
    <table><tbody><tr><td><a #T028>T028 </td><td width=400> updates the resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>

    - Using PATCH to replace triple (same content)
    <table><tbody><tr><td><a #T030>T030 </td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH to replace triple (present)
    <table><tbody><tr><td><a #T032>T032 </td><td width=400> updates the resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>

    - Using PATCH to replace triple (not present)
    <table><tbody><tr><td><a #T034>T034 </td><td width=400> does not update the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH to remove triple (present)
    <table><tbody><tr><td><a #T036>T036 </td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH to remove triple (not present)
    <table><tbody><tr><td><a #T038>T038 </td><td width=400> does not update the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - Alice's storage root
    <table><tbody><tr><td><a #T040>T040 </td><td width=400> is an ldp BasicContainer</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - Delete

    - non-container
    <table><tbody><tr><td><a #T041>T041 </td><td width=400> deletes the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T042>T042 </td><td width=400> removes the resource from the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - non-empty container
    <table><tbody><tr><td><a #T045>T045 </td><td width=400> leaves the container with the resource in it</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T046>T046 </td><td width=400> leaves the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - empty container
    <table><tbody><tr><td><a #T049>T049 </td><td width=400> deletes the container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - Create container

    - in an existing container > using PUT
    <table><tbody><tr><td><a #T051>T051 </td><td width=400> creates the container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T052>T052 </td><td width=400> adds the resource in the existing container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - Alice's pod

    - GET Turtle > As JSON-LD
    <table><tbody><tr><td><a #T057>T057 </td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - GET Turtle > As Turtle
    <table><tbody><tr><td><a #T058>T058 </td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - GET JSON-LD > As JSON-LD
    <table><tbody><tr><td><a #T059>T059 </td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - GET JSON-LD > As Turtle
    <table><tbody><tr><td><a #T060>T060 </td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

                    SHOULD results                              25/6/0/31     22/9/0/31     25/6/0/31     

wac-results.json                                                CSS           ESS           NSS           

 SHOULD
  - Update

    - Using PUT to append
    <table><tbody><tr><td><a #T061>T061 </td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T062>T062 </td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T063>T063 </td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T064>T064 </td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Using PUT to overwrite
    <table><tbody><tr><td><a #T065>T065 </td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T066>T066 </td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T067>T067 </td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T068>T068 </td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH to append
    <table><tbody><tr><td><a #T069>T069 </td><td width=400> Is allowed with accessTo Append access on resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T070>T070 </td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T071>T071 </td><td width=400> Is disallowed with accessTo Read+Control access on resource</td><td width=55>failed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T072>T072 </td><td width=400> Is allowed with default Append access on parent</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T073>T073 </td><td width=400> Is allowed with default Write access on parent</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T074>T074 </td><td width=400> Is disallowed with default Read+Control access on parent</td><td width=55>failed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH to overwrite
    <table><tbody><tr><td><a #T075>T075 </td><td width=400> Is allowed with accessTo Read+Write access on resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T076>T076 </td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>failed</td><td width=55>passed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T077>T077 </td><td width=400> Is disallowed with accessTo Write+Control access on resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T078>T078 </td><td width=400> Is allowed with default Read+Write access on parent</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T079>T079 </td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>failed</td><td width=55>passed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T080>T080 </td><td width=400> Is disallowed with default Write+Control access on parent</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
  - Create

    - Using POST to existing container
    <table><tbody><tr><td><a #T081>T081 </td><td width=400> Is allowed with accessTo Append access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T082>T082 </td><td width=400> Is allowed with accessTo Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T083>T083 </td><td width=400> Is disallowed otherwise</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    - Using PUT in existing container
    <table><tbody><tr><td><a #T084>T084 </td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T085>T085 </td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T086>T086 </td><td width=400> is disallowed without default Write</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T087>T087 </td><td width=400> is disallowed without accessTo Write or Append</td><td width=55>failed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH in existing container
    <table><tbody><tr><td><a #T088>T088 </td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T089>T089 </td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T090>T090 </td><td width=400> is disallowed without default Write</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T091>T091 </td><td width=400> is disallowed without accessTo Write or Append</td><td width=55>failed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    - Using PUT in non-existing container
    <table><tbody><tr><td><a #T092>T092 </td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T093>T093 </td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T094>T094 </td><td width=400> is disallowed without default Write</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T095>T095 </td><td width=400> is disallowed without accessTo Write or Append</td><td width=55>failed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH in non-existing container
    <table><tbody><tr><td><a #T096>T096 </td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T097>T097 </td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T098>T098 </td><td width=400> is disallowed without default Write</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T099>T099 </td><td width=400> is disallowed without accessTo Write or Append</td><td width=55>failed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
  - Read-Public
    <table><tbody><tr><td><a #T100>T100 </td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T101>T101 </td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T102>T102 </td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T103>T103 </td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T104>T104 </td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T106>T106 </td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - Read
    <table><tbody><tr><td><a #T108>T108 </td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T109>T109 </td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T110>T110 </td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T111>T111 </td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T112>T112 </td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T114>T114 </td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - Read-LoggedIn
    <table><tbody><tr><td><a #T116>T116 </td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T117>T117 </td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T118>T118 </td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T119>T119 </td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T120>T120 </td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T122>T122 </td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - From accessTo

    - Public accessTo Read
    <table><tbody><tr><td><a #T124>T124 </td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T125>T125 </td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - Public accessTo Read+Append, Bob accessTo Write
    <table><tbody><tr><td><a #T126>T126 </td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T127>T127 </td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - From default

    - Public default Read+Append, Bob default Write
    <table><tbody><tr><td><a #T128>T128 </td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T129>T129 </td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - ACL doc application

    - No access on container
    <table><tbody><tr><td><a #T130>T130 </td><td width=400> does not allow GET denied/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T131>T131 </td><td width=400> does not allow GET denied/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T132>T132 </td><td width=400> does not allow GET denied/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - ACL doc with acl:accessTo on container
    <table><tbody><tr><td><a #T133>T133 </td><td width=400> allows GET accessTo/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T134>T134 </td><td width=400> does not allow GET accessTo/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T135>T135 </td><td width=400> does not allow GET accessTo/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    - ACL doc with acl:default on container
    <table><tbody><tr><td><a #T136>T136 </td><td width=400> does not allow GET accessTo/</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T137>T137 </td><td width=400> allows GET accessTo/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T138>T138 </td><td width=400> allows GET accessTo/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - Delete
    <table><tbody><tr><td><a #T139>T139 </td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T140>T140 </td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T141>T141 </td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T142>T142 </td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
  - Alice's storage root
    <table><tbody><tr><td><a #T143>T143 </td><td width=400> has an ACL</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

                    SHOULD results                              61/22/0/83    61/22/0/83    67/16/0/83    

crud-results.json                                               CSS           ESS           NSS           

 WPS
  - Create non-container

    - in an existing container > using POST
    <table><tbody><tr><td><a #T003>T003 </td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - in an existing container > using PUT
    <table><tbody><tr><td><a #T006>T006 </td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T007>T007 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - in an existing container > using PATCH
    <table><tbody><tr><td><a #T010>T010 </td><td width=400>   emits websockets-pubsub on the container</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T011>T011 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    - in a non-existing container > using PUT
    <table><tbody><tr><td><a #T014>T014 </td><td width=400>   emits websockets-pubsub on the parent</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T015>T015 </td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T016>T016 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - in a non-existing container > using PATCH
    <table><tbody><tr><td><a #T019>T019 </td><td width=400>   emits websockets-pubsub on the parent</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T020>T020 </td><td width=400>   emits websockets-pubsub on the container</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T021>T021 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>
  - Update

    - Using PUT, overwriting plain text with plain text
    <table><tbody><tr><td><a #T023>T023 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Using PUT, overwriting Turtle with Turtle
    <table><tbody><tr><td><a #T025>T025 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Using PUT (same Turtle content)
    <table><tbody><tr><td><a #T027>T027 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH to add triple
    <table><tbody><tr><td><a #T029>T029 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    - Using PATCH to replace triple (same content)
    <table><tbody><tr><td><a #T031>T031 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    - Using PATCH to replace triple (present)
    <table><tbody><tr><td><a #T033>T033 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    - Using PATCH to replace triple (not present)
    <table><tbody><tr><td><a #T035>T035 </td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - Using PATCH to remove triple (present)
    <table><tbody><tr><td><a #T037>T037 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    - Using PATCH to remove triple (not present)
    <table><tbody><tr><td><a #T039>T039 </td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
  - Delete

    - non-container
    <table><tbody><tr><td><a #T043>T043 </td><td width=400>   emits websockets-pubsub on the container</td><td width=55>failed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T044>T044 </td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - non-empty container
    <table><tbody><tr><td><a #T047>T047 </td><td width=400>   does not emit websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T048>T048 </td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    - empty container
    <table><tbody><tr><td><a #T050>T050 </td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
  - Create container

    - in an existing container > using PUT
    <table><tbody><tr><td><a #T053>T053 </td><td width=400>   emits websockets-pubsub on the existing container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a #T054>T054 </td><td width=400>   emits websockets-pubsub on the new container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

                    WPS results                                 17/10/0/27    0/0/27/27     18/9/0/27     

### 4. ERROR REPORT

#### <a name="T001">T001</a>

  - ESS

    Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error: Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.

    

#### <a name="T002">T002</a>

  - ESS

    Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error: Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.

    

#### <a name="T003">T003</a>

  - ESS

    Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error: Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.

    

#### <a name="T008">T008</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T009">T009</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    - Expected  - 1

    + Received  + 0

    

      Array [

        "http://localhost:3000/solid-crud-tests-1615212782493/exists/exists.ttl",

    -   "http://localhost:3000/solid-crud-tests-1615212782493/exists/new.ttl",

      ]

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    - Expected  - 1

    + Received  + 0

    

      Array [

        "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138854633/exists/exists.ttl",

    -   "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138854633/exists/new.ttl",

      ]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    - Expected  - 1

    + Received  + 0

    

      Array [

        "https://alice.localhost:8443/solid-crud-tests-1615212440668/exists/exists.ttl",

    -   "https://alice.localhost:8443/solid-crud-tests-1615212440668/exists/new.ttl",

      ]

    

#### <a name="T010">T010</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212782493/exists/", "pub http://localhost:3000/solid-crud-tests-1615212782493/exists/"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212782493/exists/"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212440668/exists/", "pub https://alice.localhost:8443/solid-crud-tests-1615212440668/exists/"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212440668/exists/"]

    

#### <a name="T011">T011</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212782493/exists/new.ttl", "pub http://localhost:3000/solid-crud-tests-1615212782493/exists/new.ttl"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212782493/exists/new.ttl"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212440668/exists/new.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615212440668/exists/new.ttl"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212440668/exists/new.ttl"]

    

#### <a name="T017">T017</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T018">T018</a>

  - CSS

    Error: Fetcher: <http://localhost:3000/solid-crud-tests-1615212782500/new/> Not Found

    

  - ESS

    Error: Fetcher: <https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138854640/new/> Not Found

    

  - NSS

    Error: Fetcher: <https://alice.localhost:8443/solid-crud-tests-1615212440674/new/> Not Found

    

#### <a name="T019">T019</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212782500/", "pub http://localhost:3000/solid-crud-tests-1615212782500/"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212782500/"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212440674/", "pub https://alice.localhost:8443/solid-crud-tests-1615212440674/"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212440674/"]

    

#### <a name="T020">T020</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212782500/new/", "pub http://localhost:3000/solid-crud-tests-1615212782500/new/"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212782500/new/"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212440674/new/", "pub https://alice.localhost:8443/solid-crud-tests-1615212440674/new/"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212440674/new/"]

    

#### <a name="T021">T021</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212782500/new/new.ttl", "pub http://localhost:3000/solid-crud-tests-1615212782500/new/new.ttl"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212782500/new/new.ttl"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212440674/new/new.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615212440674/new/new.ttl"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212440674/new/new.ttl"]

    

#### <a name="T024">T024</a>

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#contents"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#the"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#replaced"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl"}}]

    

#### <a name="T028">T028</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl#that"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl#hello"}}]

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#that"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}}]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl#that"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl#hello"}}]

    

#### <a name="T029">T029</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl", "pub http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212794049/exists/exists3.ttl"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212455555/exists/exists3.ttl"]

    

#### <a name="T031">T031</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212794051/exists/exists4.ttl", "pub http://localhost:3000/solid-crud-tests-1615212794051/exists/exists4.ttl"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212794051/exists/exists4.ttl"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212455557/exists/exists4.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615212455557/exists/exists4.ttl"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212455557/exists/exists4.ttl"]

    

#### <a name="T032">T032</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl#that"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl#hello"}}]

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#that"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#hello"}}]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl#that"}}]

    Received: [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl#hello"}}]

    

#### <a name="T033">T033</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl", "pub http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212794053/exists/exists4.ttl"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212455559/exists/exists4.ttl"]

    

#### <a name="T037">T037</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212794056/exists/exists6.ttl", "pub http://localhost:3000/solid-crud-tests-1615212794056/exists/exists6.ttl"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212794056/exists/exists6.ttl"]

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615212455563/exists/exists6.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615212455563/exists/exists6.ttl"]

    Received: ["ack https://alice.localhost:8443/solid-crud-tests-1615212455563/exists/exists6.ttl"]

    

#### <a name="T043">T043</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: ArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615212808100/exists/", "pub http://localhost:3000/solid-crud-tests-1615212808100/exists/"]

    Received: ["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615212808100/exists/"]

    

#### <a name="T069">T069</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T070">T070</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T071">T071</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

#### <a name="T072">T072</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T073">T073</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T074">T074</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

#### <a name="T075">T075</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T076">T076</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

#### <a name="T077">T077</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

#### <a name="T078">T078</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T079">T079</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

#### <a name="T080">T080</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

#### <a name="T083">T083</a>

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name="T086">T086</a>

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name="T087">T087</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name="T088">T088</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T089">T089</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T090">T090</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

#### <a name="T091">T091</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

#### <a name="T094">T094</a>

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name="T095">T095</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 205

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 201

    

#### <a name="T096">T096</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T097">T097</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "5xx"

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: "2xx"

    Received: "4xx"

    

#### <a name="T098">T098</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

  - NSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

#### <a name="T099">T099</a>

  - CSS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 501

    

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 415

    

#### <a name="T136">T136</a>

  - ESS

    Error: expect(received).toEqual(expected) // deep equality

    

    Expected: 403

    Received: 200

    

