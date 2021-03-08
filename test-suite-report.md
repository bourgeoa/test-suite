
SOLID-TEST-SUITE REPORT                                         

1. SUMMARY by testFile

1.1 crud-results.json

    CSS

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         SHOULD      {"passed":25,"failed":6,"pending":0,"total":31}
         WPS         {"passed":17,"failed":10,"pending":0,"total":27}
         total       {"passed":42,"failed":16,"pending":2,"total":60}

    ESS

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         SHOULD      {"passed":22,"failed":9,"pending":0,"total":31}
         WPS         {"passed":0,"failed":0,"pending":27,"total":27}
         total       {"passed":22,"failed":9,"pending":29,"total":60}

    NSS

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         SHOULD      {"passed":25,"failed":6,"pending":0,"total":31}
         WPS         {"passed":18,"failed":9,"pending":0,"total":27}
         total       {"passed":43,"failed":15,"pending":2,"total":60}

1.2 wac-results.json

    CSS

         SHOULD      {"passed":61,"failed":22,"pending":0,"total":83}
         total       {"passed":61,"failed":22,"pending":0,"total":83}
    ESS

         SHOULD      {"passed":61,"failed":22,"pending":0,"total":83}
         total       {"passed":61,"failed":22,"pending":0,"total":83}
    NSS

         SHOULD      {"passed":67,"failed":16,"pending":0,"total":83}
         total       {"passed":67,"failed":16,"pending":0,"total":83}

2. SUMMARY by server

CSS

    crud-results.json

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         SHOULD      {"passed":25,"failed":6,"pending":0,"total":31}
         WPS         {"passed":17,"failed":10,"pending":0,"total":27}
         total       {"passed":42,"failed":16,"pending":2,"total":60}

    wac-results.json

         SHOULD      {"passed":61,"failed":22,"pending":0,"total":83}
         total       {"passed":61,"failed":22,"pending":0,"total":83}

ESS

    crud-results.json

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         SHOULD      {"passed":22,"failed":9,"pending":0,"total":31}
         WPS         {"passed":0,"failed":0,"pending":27,"total":27}
         total       {"passed":22,"failed":9,"pending":29,"total":60}

  wac-results.json

         SHOULD      {"passed":61,"failed":22,"pending":0,"total":83}
         total       {"passed":61,"failed":22,"pending":0,"total":83}

NSS

  crud-results.json

         MAY         {"passed":0,"failed":0,"pending":2,"total":2}
         SHOULD      {"passed":25,"failed":6,"pending":0,"total":31}
         WPS         {"passed":18,"failed":9,"pending":0,"total":27}
         total       {"passed":43,"failed":15,"pending":2,"total":60}

  wac-results.json

         SHOULD      {"passed":67,"failed":16,"pending":0,"total":83}
         total       {"passed":67,"failed":16,"pending":0,"total":83}

3. UNIT TESTS by testFile and level

crud-results.json                                               CSS           ESS           NSS           

    MAY
     Alice's pod
      Get RDFa > As JSON-LD
       A001 A001 Triples                                           pending       pending       pending       
      Get RDFa > As Turtle
       A002 A002 Triples                                           pending       pending       pending       

                       MAY results                                 0/0/2/2       0/0/2/2       0/0/2/2       

    SHOULD
     Create non-container
      in an existing container > using POST
       T001 creates the resource                                   passed        failed        passed        
      in an existing container > using POST
       T002 adds the resource in the container listing             passed        failed        passed        
      in an existing container > using PUT
       T004 creates the resource                                   passed        passed        passed        
   in an existing container > using PUT
    T005 adds the resource in the container listing             passed        passed        passed        
   in an existing container > using PATCH
    T008 creates the resource                                   failed        failed        failed        
   in an existing container > using PATCH
    T009 adds the resource in the container listing             failed        failed        failed        
   in a non-existing container > using PUT
    T012 creates the resource                                   passed        passed        passed        
   in a non-existing container > using PUT
    T013 adds the resource in the container listing             passed        passed        passed        
   in a non-existing container > using PATCH
    T017 creates the resource                                   failed        failed        failed        
   in a non-existing container > using PATCH
    T018 adds the resource in the container listing             failed        failed        failed        
  Update
   Using PUT, overwriting plain text with plain text
    T022 updates the resource                                   passed        passed        passed        
   Using PUT, overwriting Turtle with Turtle
    T024 updates the resource                                   passed        failed        passed        
   Using PUT (same Turtle content)
    T026 updates the resource                                   passed        passed        passed        
   Using PATCH to add triple
    T028 updates the resource                                   failed        failed        failed        
   Using PATCH to replace triple (same content)
    T030 updates the resource                                   passed        passed        passed        
   Using PATCH to replace triple (present)
    T032 updates the resource                                   failed        failed        failed        
   Using PATCH to replace triple (not present)
    T034 does not update the resource                           passed        passed        passed        
   Using PATCH to remove triple (present)
    T036 updates the resource                                   passed        passed        passed        
   Using PATCH to remove triple (not present)
    T038 does not update the resource                           passed        passed        passed        
  Alice's storage root
    T040 is an ldp BasicContainer                               passed        passed        passed        
  Delete
   non-container
    T041 deletes the resource                                   passed        passed        passed        
    T042 removes the resource from the container listing        passed        passed        passed        
   non-empty container
    T045 leaves the container with the resource in it           passed        passed        passed        
    T046 leaves the resource                                    passed        passed        passed        
   empty container
    T049 deletes the container                                  passed        passed        passed        
  Create container
   in an existing container > using PUT
    T051 creates the container                                  passed        passed        passed        
   in an existing container > using PUT
    T052 adds the resource in the existing container listing    passed        passed        passed        
  Alice's pod
   GET Turtle > As JSON-LD
    T057 Triples                                                passed        passed        passed        
   GET Turtle > As Turtle
    T058 Triples                                                passed        passed        passed        
   GET JSON-LD > As JSON-LD
    T059 Triples                                                passed        passed        passed        
   GET JSON-LD > As Turtle
    T060 Triples                                                passed        passed        passed        

                    SHOULD results                              25/6/0/31     22/9/0/31     25/6/0/31     

wac-results.json                                                CSS           ESS           NSS           

 SHOULD
  Update
   Using PUT to append
    T061 Is allowed with accessTo Write access on resource      passed        passed        passed        
    T062 Is disallowed with accessTo Read+Append+Control access 
     on resource                                                passed        passed        passed        
    T063 Is allowed with default Write access on parent         passed        passed        passed        
    T064 Is disallowed with default Read+Append+Control access  
     on parent                                                  passed        passed        passed        
   Using PUT to overwrite
    T065 Is allowed with accessTo Write access on resource      passed        passed        passed        
    T066 Is disallowed with accessTo Read+Append+Control access 
     on resource                                                passed        passed        passed        
    T067 Is allowed with default Write access on parent         passed        passed        passed        
    T068 Is disallowed with default Read+Append+Control access  
     on parent                                                  passed        passed        passed        
   Using PATCH to append
    T069 Is allowed with accessTo Append access on resource     failed        failed        failed        
    T070 Is allowed with accessTo Write access on resource      failed        failed        failed        
    T071 Is disallowed with accessTo Read+Control access on     
     resource                                                   failed        passed        passed        
    T072 Is allowed with default Append access on parent        failed        failed        failed        
    T073 Is allowed with default Write access on parent         failed        failed        failed        
    T074 Is disallowed with default Read+Control access on      
     parent                                                     failed        passed        passed        
   Using PATCH to overwrite
    T075 Is allowed with accessTo Read+Write access on resource failed        failed        failed        
    T076 Is disallowed with accessTo Read+Append+Control access 
     on resource                                                failed        passed        failed        
    T077 Is disallowed with accessTo Write+Control access on    
     resource                                                   failed        failed        failed        
    T078 Is allowed with default Read+Write access on parent    failed        failed        failed        
    T079 Is disallowed with default Read+Append+Control access  
     on parent                                                  failed        passed        failed        
    T080 Is disallowed with default Write+Control access on     
     parent                                                     failed        failed        failed        
  Create
   Using POST to existing container
    T081 Is allowed with accessTo Append access                 passed        passed        passed        
    T082 Is allowed with accessTo Write access                  passed        passed        passed        
    T083 Is disallowed otherwise                                passed        failed        passed        
   Using PUT in existing container
    T084 Is allowed with accessTo Write and default Write acces passed        passed        passed        
    T085 Is allowed with accessTo Append and default Write      
     access                                                     passed        passed        passed        
    T086 is disallowed without default Write                    passed        failed        passed        
    T087 is disallowed without accessTo Write or Append         failed        failed        passed        
   Using PATCH in existing container
    T088 Is allowed with accessTo Write and default Write acces failed        failed        failed        
    T089 Is allowed with accessTo Append and default Write      
     access                                                     failed        failed        failed        
    T090 is disallowed without default Write                    failed        failed        failed        
    T091 is disallowed without accessTo Write or Append         failed        failed        passed        
   Using PUT in non-existing container
    T092 Is allowed with accessTo Write and default Write acces passed        passed        passed        
    T093 Is allowed with accessTo Append and default Write      
     access                                                     passed        passed        passed        
    T094 is disallowed without default Write                    passed        failed        passed        
    T095 is disallowed without accessTo Write or Append         failed        failed        passed        
   Using PATCH in non-existing container
    T096 Is allowed with accessTo Write and default Write acces failed        failed        failed        
    T097 Is allowed with accessTo Append and default Write      
     access                                                     failed        failed        failed        
    T098 is disallowed without default Write                    failed        failed        failed        
    T099 is disallowed without accessTo Write or Append         failed        failed        passed        
  Read-Public
    T100 Is allowed with accessTo Read access on non-container  
     resource                                                   passed        passed        passed        
    T101 Is disallowed with accessTo Append+Write+Control       
     access on non-container resource                           passed        passed        passed        
    T102 Is allowed with default Read access on parent of       
     non-container                                              passed        passed        passed        
    T103 Is disallowed with default Append+Write+Control access 
     on parent of non-container                                 passed        passed        passed        
    T104 Is allowed with accessTo Read access on container      
     resource                                                   passed        passed        passed        
    T106 Is allowed with default Read access on parent of       
     container                                                  passed        passed        passed        
  Read
    T108 Is allowed with accessTo Read access on non-container  
     resource                                                   passed        passed        passed        
    T109 Is disallowed with accessTo Append+Write+Control       
     access on non-container resource                           passed        passed        passed        
    T110 Is allowed with default Read access on parent of       
     non-container                                              passed        passed        passed        
    T111 Is disallowed with default Append+Write+Control access 
     on parent of non-container                                 passed        passed        passed        
    T112 Is allowed with accessTo Read access on container      
     resource                                                   passed        passed        passed        
    T114 Is allowed with default Read access on parent of       
     container                                                  passed        passed        passed        
  Read-LoggedIn
    T116 Is allowed with accessTo Read access on non-container  
     resource                                                   passed        passed        passed        
    T117 Is disallowed with accessTo Append+Write+Control       
     access on non-container resource                           passed        passed        passed        
    T118 Is allowed with default Read access on parent of       
     non-container                                              passed        passed        passed        
    T119 Is disallowed with default Append+Write+Control access 
     on parent of non-container                                 passed        passed        passed        
    T120 Is allowed with accessTo Read access on container      
     resource                                                   passed        passed        passed        
    T122 Is allowed with default Read access on parent of       
     container                                                  passed        passed        passed        
  From accessTo
   Public accessTo Read
    T124 Shows the correct WAC-Allow header to Bob              passed        passed        passed        
    T125 Shows the correct WAC-Allow header to the public       passed        passed        passed        
   Public accessTo Read+Append, Bob accessTo Write
    T126 Shows the correct WAC-Allow header to Bob              passed        passed        passed        
    T127 Shows the correct WAC-Allow header to the public       passed        passed        passed        
  From default
   Public default Read+Append, Bob default Write
    T128 Shows the correct WAC-Allow header to Bob              passed        passed        passed        
    T129 Shows the correct WAC-Allow header to the public       passed        passed        passed        
  ACL doc application
   No access on container
    T130 does not allow GET denied/                             passed        passed        passed        
    T131 does not allow GET denied/noAclDoc/                    passed        passed        passed        
    T132 does not allow GET denied/noAclDoc/noAclDoc.txt        passed        passed        passed        
   ACL doc with acl:accessTo on container
    T133 allows GET accessTo/                                   passed        passed        passed        
    T134 does not allow GET accessTo/noAclDoc/                  passed        passed        passed        
    T135 does not allow GET accessTo/noAclDoc/noAclDoc.txt      passed        passed        passed        
   ACL doc with acl:default on container
    T136 does not allow GET accessTo/                           passed        failed        passed        
    T137 allows GET accessTo/noAclDoc/                          passed        passed        passed        
    T138 allows GET accessTo/noAclDoc/noAclDoc.txt              passed        passed        passed        
  Delete
    T139 Is allowed with accessTo Write access on resource      passed        passed        passed        
    T140 Is disallowed with accessTo Read+Append+Control access 
     on resource                                                passed        passed        passed        
    T141 Is allowed with default Write access on parent         passed        passed        passed        
    T142 Is disallowed with default Read+Append+Control access  
     on parent                                                  passed        passed        passed        
  Alice's storage root
    T143 has an ACL                                             passed        passed        passed        

                    SHOULD results                              61/22/0/83    61/22/0/83    67/16/0/83    

crud-results.json                                               CSS           ESS           NSS           

 WPS
  Create non-container
   in an existing container > using POST
    T003 emits websockets-pubsub on the container               passed        pending       passed        
   in an existing container > using PUT
    T006 emits websockets-pubsub on the container               passed        pending       passed        
   in an existing container > using PUT
    T007 emits websockets-pubsub on the resource                passed        pending       passed        
   in an existing container > using PATCH
    T010 emits websockets-pubsub on the container               failed        pending       failed        
   in an existing container > using PATCH
    T011 emits websockets-pubsub on the resource                failed        pending       failed        
   in a non-existing container > using PUT
    T014 emits websockets-pubsub on the parent                  passed        pending       passed        
   in a non-existing container > using PUT
    T015 emits websockets-pubsub on the container               passed        pending       passed        
   in a non-existing container > using PUT
    T016 emits websockets-pubsub on the resource                passed        pending       passed        
   in a non-existing container > using PATCH
    T019 emits websockets-pubsub on the parent                  failed        pending       failed        
   in a non-existing container > using PATCH
    T020 emits websockets-pubsub on the container               failed        pending       failed        
   in a non-existing container > using PATCH
    T021 emits websockets-pubsub on the resource                failed        pending       failed        
  Update
   Using PUT, overwriting plain text with plain text
    T023 emits websockets-pubsub on the resource                passed        pending       passed        
   Using PUT, overwriting Turtle with Turtle
    T025 emits websockets-pubsub on the resource                passed        pending       passed        
   Using PUT (same Turtle content)
    T027 emits websockets-pubsub on the resource                passed        pending       passed        
   Using PATCH to add triple
    T029 emits websockets-pubsub on the resource                failed        pending       failed        
   Using PATCH to replace triple (same content)
    T031 emits websockets-pubsub on the resource                failed        pending       failed        
   Using PATCH to replace triple (present)
    T033 emits websockets-pubsub on the resource                failed        pending       failed        
   Using PATCH to replace triple (not present)
    T035 does not emit websockets-pubsub on the resource        passed        pending       passed        
   Using PATCH to remove triple (present)
    T037 emits websockets-pubsub on the resource                failed        pending       failed        
   Using PATCH to remove triple (not present)
    T039 does not emit websockets-pubsub on the resource        passed        pending       passed        
  Delete
   non-container
    T043 emits websockets-pubsub on the container               failed        pending       passed        
    T044 emits websockets-pubsub on the resource                passed        pending       passed        
   non-empty container
    T047 does not emit websockets-pubsub on the container       passed        pending       passed        
    T048 does not emit websockets-pubsub on the resource        passed        pending       passed        
   empty container
    T050 emits websockets-pubsub on the container               passed        pending       passed        
  Create container
   in an existing container > using PUT
    T053 emits websockets-pubsub on the existing container      passed        pending       passed        
   in an existing container > using PUT
    T054 emits websockets-pubsub on the new container           passed        pending       passed        

                    WPS results                                 17/10/0/27    0/0/27/27     18/9/0/27     

4. ERROR REPORT

T001
  ESS
    Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error: Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.
    
T002
  ESS
    Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error: Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.
    
T003
  ESS
    Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error: Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.
    
T008
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T009
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    [32m- Expected  - 1[39m
    [31m+ Received  + 0[39m
    
    [2m  Array [[22m
    [2m    "http://localhost:3000/solid-crud-tests-1615143041673/exists/exists.ttl",[22m
    [32m-   "http://localhost:3000/solid-crud-tests-1615143041673/exists/new.ttl",[39m
    [2m  ][22m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    [32m- Expected  - 1[39m
    [31m+ Received  + 0[39m
    
    [2m  Array [[22m
    [2m    "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138854633/exists/exists.ttl",[22m
    [32m-   "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138854633/exists/new.ttl",[39m
    [2m  ][22m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    [32m- Expected  - 1[39m
    [31m+ Received  + 0[39m
    
    [2m  Array [[22m
    [2m    "https://alice.localhost:8443/solid-crud-tests-1615143144316/exists/exists.ttl",[22m
    [32m-   "https://alice.localhost:8443/solid-crud-tests-1615143144316/exists/new.ttl",[39m
    [2m  ][22m
    
T010
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143041673/exists/", "pub http://localhost:3000/solid-crud-tests-1615143041673/exists/"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143041673/exists/"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143144316/exists/", "pub https://alice.localhost:8443/solid-crud-tests-1615143144316/exists/"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143144316/exists/"][39m
    
T011
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143041673/exists/new.ttl", "pub http://localhost:3000/solid-crud-tests-1615143041673/exists/new.ttl"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143041673/exists/new.ttl"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143144316/exists/new.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615143144316/exists/new.ttl"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143144316/exists/new.ttl"][39m
    
T017
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T018
  CSS
    Error: Fetcher: <http://localhost:3000/solid-crud-tests-1615143041680/new/> Not Found
    
  ESS
    Error: Fetcher: <https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138854640/new/> Not Found
    
  NSS
    Error: Fetcher: <https://alice.localhost:8443/solid-crud-tests-1615143144323/new/> Not Found
    
T019
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143041680/", "pub http://localhost:3000/solid-crud-tests-1615143041680/"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143041680/"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143144323/", "pub https://alice.localhost:8443/solid-crud-tests-1615143144323/"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143144323/"][39m
    
T020
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143041680/new/", "pub http://localhost:3000/solid-crud-tests-1615143041680/new/"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143041680/new/"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143144323/new/", "pub https://alice.localhost:8443/solid-crud-tests-1615143144323/new/"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143144323/new/"][39m
    
T021
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143041680/new/new.ttl", "pub http://localhost:3000/solid-crud-tests-1615143041680/new/new.ttl"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143041680/new/new.ttl"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143144323/new/new.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615143144323/new/new.ttl"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143144323/new/new.ttl"][39m
    
T024
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#contents"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#the"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#replaced"}}][39m
    Received: [31m[{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884047/exists/exists1.ttl"}}][39m
    
T028
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl#that"}}][39m
    Received: [31m[{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl#hello"}}][39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#that"}}][39m
    Received: [31m[{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884052/exists/exists3.ttl"}}][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl#hello"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl#that"}}][39m
    Received: [31m[{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl#hello"}}][39m
    
T029
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl", "pub http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143053373/exists/exists3.ttl"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143160565/exists/exists3.ttl"][39m
    
T031
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143053374/exists/exists4.ttl", "pub http://localhost:3000/solid-crud-tests-1615143053374/exists/exists4.ttl"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143053374/exists/exists4.ttl"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143160566/exists/exists4.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615143160566/exists/exists4.ttl"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143160566/exists/exists4.ttl"][39m
    
T032
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl#that"}}][39m
    Received: [31m[{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl#hello"}}][39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#that"}}][39m
    Received: [31m[{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/ns/ldp#RDFSource"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl"}}, {"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite/solid-crud-tests-1615138884055/exists/exists4.ttl#hello"}}][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining [{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl#fact"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl#that"}}][39m
    Received: [31m[{"graph": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl"}, "object": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl#world"}, "predicate": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl#linked"}, "subject": {"classOrder": 5, "termType": "NamedNode", "value": "https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl#hello"}}][39m
    
T033
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl", "pub http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143053376/exists/exists4.ttl"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143160568/exists/exists4.ttl"][39m
    
T037
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143053380/exists/exists6.ttl", "pub http://localhost:3000/solid-crud-tests-1615143053380/exists/exists6.ttl"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143053380/exists/exists6.ttl"][39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack https://alice.localhost:8443/solid-crud-tests-1615143160572/exists/exists6.ttl", "pub https://alice.localhost:8443/solid-crud-tests-1615143160572/exists/exists6.ttl"][39m
    Received: [31m["ack https://alice.localhost:8443/solid-crud-tests-1615143160572/exists/exists6.ttl"][39m
    
T043
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32mArrayContaining ["ack http://localhost:3000/solid-crud-tests-1615143067706/exists/", "pub http://localhost:3000/solid-crud-tests-1615143067706/exists/"][39m
    Received: [31m["protocol solid-0.1", "warning Unrecognized message format: auth ", "warning Unrecognized message format: dpop ", "ack http://localhost:3000/solid-crud-tests-1615143067706/exists/"][39m
    
T069
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T070
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T071
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
T072
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T073
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T074
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
T075
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T076
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
T077
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
T078
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T079
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
T080
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
T083
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m201[39m
    
T086
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m201[39m
    
T087
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m205[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m201[39m
    
T088
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T089
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T090
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
T091
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
T094
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m201[39m
    
T095
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m205[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m201[39m
    
T096
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T097
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m5[27mxx"[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m"[7m2[27mxx"[39m
    Received: [31m"[7m4[27mxx"[39m
    
T098
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
  NSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
T099
  CSS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m501[39m
    
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m415[39m
    
T136
  ESS
    Error: expect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m
    
    Expected: [32m403[39m
    Received: [31m200[39m
    
