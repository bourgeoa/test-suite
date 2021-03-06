
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

    <table><thead><td width=465>></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>Get RDFa > As JSON-LD></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#A001>A001</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Get RDFa > As Turtle></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#A002>A002</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

                    MAY results                                 2/0/0/2       0/0/2/2       2/0/0/2       

 SHOULD

    <table><thead><td width=465>Get RDFa > As Turtle></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>in an existing container > using POST></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T001>T001</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T002>T002</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>in an existing container > using PUT></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T004>T004</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T005>T005</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>in an existing container > using PATCH></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T008>T008</a></td><td width=400> creates the resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T009>T009</a></td><td width=400> adds the resource in the container listing</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>in a non-existing container > using PUT></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T012>T012</a></td><td width=400> creates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T013>T013</a></td><td width=400> adds the resource in the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>in a non-existing container > using PATCH></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T017>T017</a></td><td width=400> creates the resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T018>T018</a></td><td width=400> adds the resource in the container listing</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>in a non-existing container > using PATCH></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>Using PUT, overwriting plain text with plain text></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T022>T022</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PUT, overwriting Turtle with Turtle></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T024>T024</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PUT (same Turtle content)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T026>T026</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to add triple></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T028>T028</a></td><td width=400> updates the resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to replace triple (same content)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T030>T030</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to replace triple (present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T032>T032</a></td><td width=400> updates the resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to replace triple (not present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T034>T034</a></td><td width=400> does not update the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to remove triple (present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T036>T036</a></td><td width=400> updates the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to remove triple (not present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T038>T038</a></td><td width=400> does not update the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to remove triple (not present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T040>T040</a></td><td width=400> is an ldp BasicContainer</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>non-container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T041>T041</a></td><td width=400> deletes the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T042>T042</a></td><td width=400> removes the resource from the container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>non-empty container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T045>T045</a></td><td width=400> leaves the container with the resource in it</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T046>T046</a></td><td width=400> leaves the resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>empty container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T049>T049</a></td><td width=400> deletes the container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>empty container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>in an existing container > using PUT></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T051>T051</a></td><td width=400> creates the container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T052>T052</a></td><td width=400> adds the resource in the existing container listing</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>in an existing container > using PUT></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>GET Turtle > As JSON-LD></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T057>T057</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>GET Turtle > As Turtle></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T058>T058</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>GET JSON-LD > As JSON-LD></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T059>T059</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>GET JSON-LD > As Turtle></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T060>T060</a></td><td width=400> Triples</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

                    SHOULD results                              25/6/0/31     22/9/0/31     25/6/0/31     

wac-results.json                                                CSS           ESS           NSS           

 SHOULD

    <table><thead><td width=465>></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>Using PUT to append></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T061>T061</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T062>T062</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T063>T063</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T064>T064</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PUT to overwrite></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T065>T065</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T066>T066</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T067>T067</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T068>T068</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to append></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T069>T069</a></td><td width=400> Is allowed with accessTo Append access on resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T070>T070</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T071>T071</a></td><td width=400> Is disallowed with accessTo Read+Control access on resource</td><td width=55>failed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T072>T072</a></td><td width=400> Is allowed with default Append access on parent</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T073>T073</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T074>T074</a></td><td width=400> Is disallowed with default Read+Control access on parent</td><td width=55>failed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to overwrite></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T075>T075</a></td><td width=400> Is allowed with accessTo Read+Write access on resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T076>T076</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>failed</td><td width=55>passed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T077>T077</a></td><td width=400> Is disallowed with accessTo Write+Control access on resource</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T078>T078</a></td><td width=400> Is allowed with default Read+Write access on parent</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T079>T079</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>failed</td><td width=55>passed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T080>T080</a></td><td width=400> Is disallowed with default Write+Control access on parent</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to overwrite></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>Using POST to existing container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T081>T081</a></td><td width=400> Is allowed with accessTo Append access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T082>T082</a></td><td width=400> Is allowed with accessTo Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T083>T083</a></td><td width=400> Is disallowed otherwise</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PUT in existing container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T084>T084</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T085>T085</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T086>T086</a></td><td width=400> is disallowed without default Write</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T087>T087</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55>failed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH in existing container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T088>T088</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T089>T089</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T090>T090</a></td><td width=400> is disallowed without default Write</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T091>T091</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55>failed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PUT in non-existing container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T092>T092</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T093>T093</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T094>T094</a></td><td width=400> is disallowed without default Write</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T095>T095</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55>failed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH in non-existing container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T096>T096</a></td><td width=400> Is allowed with accessTo Write and default Write access</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T097>T097</a></td><td width=400> Is allowed with accessTo Append and default Write access</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T098>T098</a></td><td width=400> is disallowed without default Write</td><td width=55>failed</td><td width=55>failed</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T099>T099</a></td><td width=400> is disallowed without accessTo Write or Append</td><td width=55>failed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH in non-existing container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T100>T100</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T101>T101</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T102>T102</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T103>T103</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T104>T104</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T106>T106</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T108>T108</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T109>T109</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T110>T110</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T111>T111</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T112>T112</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T114>T114</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T116>T116</a></td><td width=400> Is allowed with accessTo Read access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T117>T117</a></td><td width=400> Is disallowed with accessTo Append+Write+Control access on non-container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T118>T118</a></td><td width=400> Is allowed with default Read access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T119>T119</a></td><td width=400> Is disallowed with default Append+Write+Control access on parent of non-container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T120>T120</a></td><td width=400> Is allowed with accessTo Read access on container resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T122>T122</a></td><td width=400> Is allowed with default Read access on parent of container</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>Public accessTo Read></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T124>T124</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T125>T125</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Public accessTo Read+Append, Bob accessTo Write></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T126>T126</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T127>T127</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Public accessTo Read+Append, Bob accessTo Write></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>Public default Read+Append, Bob default Write></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T128>T128</a></td><td width=400> Shows the correct WAC-Allow header to Bob</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T129>T129</a></td><td width=400> Shows the correct WAC-Allow header to the public</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Public default Read+Append, Bob default Write></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>No access on container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T130>T130</a></td><td width=400> does not allow GET denied/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T131>T131</a></td><td width=400> does not allow GET denied/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T132>T132</a></td><td width=400> does not allow GET denied/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>ACL doc with acl:accessTo on container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T133>T133</a></td><td width=400> allows GET accessTo/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T134>T134</a></td><td width=400> does not allow GET accessTo/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T135>T135</a></td><td width=400> does not allow GET accessTo/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>ACL doc with acl:default on container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T136>T136</a></td><td width=400> does not allow GET accessTo/</td><td width=55>passed</td><td width=55>failed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T137>T137</a></td><td width=400> allows GET accessTo/noAclDoc/</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T138>T138</a></td><td width=400> allows GET accessTo/noAclDoc/noAclDoc.txt</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>ACL doc with acl:default on container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T139>T139</a></td><td width=400> Is allowed with accessTo Write access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T140>T140</a></td><td width=400> Is disallowed with accessTo Read+Append+Control access on resource</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T141>T141</a></td><td width=400> Is allowed with default Write access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T142>T142</a></td><td width=400> Is disallowed with default Read+Append+Control access on parent</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T143>T143</a></td><td width=400> has an ACL</td><td width=55>passed</td><td width=55>passed</td><td width=55>passed</td></tr></tbody></table>

                    SHOULD results                              61/22/0/83    61/22/0/83    67/16/0/83    

crud-results.json                                               CSS           ESS           NSS           

 WPS

    <table><thead><td width=465>></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>in an existing container > using POST></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T003>T003</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>in an existing container > using PUT></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T006>T006</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T007>T007</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>in an existing container > using PATCH></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T010>T010</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T011>T011</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>in a non-existing container > using PUT></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T014>T014</a></td><td width=400>   emits websockets-pubsub on the parent</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T015>T015</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T016>T016</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>in a non-existing container > using PATCH></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T019>T019</a></td><td width=400>   emits websockets-pubsub on the parent</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T020>T020</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T021>T021</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>in a non-existing container > using PATCH></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>Using PUT, overwriting plain text with plain text></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T023>T023</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PUT, overwriting Turtle with Turtle></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T025>T025</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PUT (same Turtle content)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T027>T027</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to add triple></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T029>T029</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to replace triple (same content)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T031>T031</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to replace triple (present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T033>T033</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to replace triple (not present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T035>T035</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to remove triple (present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T037>T037</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>failed</td><td width=55>pending</td><td width=55>failed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to remove triple (not present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T039>T039</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>Using PATCH to remove triple (not present)></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>non-container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T043>T043</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>failed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T044>T044</a></td><td width=400>   emits websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>non-empty container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T047>T047</a></td><td width=400>   does not emit websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T048>T048</a></td><td width=400>   does not emit websockets-pubsub on the resource</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>empty container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T050>T050</a></td><td width=400>   emits websockets-pubsub on the container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

    <table><thead><td width=465>empty container></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>

    <table><thead><td width=465>in an existing container > using PUT></td><td width=80>CSS</td>}</td><td width=80>ESS</td>}</td><td width=80>NSS</td>}</thead></table>
    <table><tbody><tr><td><a href=#T053>T053</a></td><td width=400>   emits websockets-pubsub on the existing container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>
    <table><tbody><tr><td><a href=#T054>T054</a></td><td width=400>   emits websockets-pubsub on the new container</td><td width=55>passed</td><td width=55>pending</td><td width=55>passed</td></tr></tbody></table>

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

    

