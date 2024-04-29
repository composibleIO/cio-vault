/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const test_script = `
(xor
 (new $res
  (new $cids
   (new $b
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
          (call %init_peer_id% ("op" "concat") ["testdir" "/" "test.txt"] ret)
         )
         (par
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (new $option-inline
                  (seq
                   (seq
                    (new %TestV0_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (ap ("chainNetworkId" 31337) %TestV0_obj_map)
                           (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TestV0_obj_map)
                          )
                          (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TestV0_obj_map)
                         )
                         (ap ("definition" "bafkreibdsv56dy5ablaxomq722uxk4bujzenr7u6hkddakt4uyvrtpwcii") %TestV0_obj_map)
                        )
                        (ap ("matched" true) %TestV0_obj_map)
                       )
                       (ap ("timestamp" "2024-04-29T08:19:56.214Z") %TestV0_obj_map)
                      )
                      (canon %init_peer_id% %TestV0_obj_map  TestV0_obj)
                     )
                    )
                    (xor
                     (ap TestV0_obj $option-inline)
                     (null)
                    )
                   )
                   (canon %init_peer_id% $option-inline  #option-inline-0)
                  )
                 )
                 (new %Deals_obj_map
                  (seq
                   (ap ("testV0" #option-inline-0) %Deals_obj_map)
                   (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                  )
                 )
                )
                (ap Deals_obj.$.testV0 Deals_obj_flat)
               )
               (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
              )
              (xor
               (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret-0)
               (fail :error:)
              )
             )
             (new -if-error-
              (xor
               (seq
                (match ret-0.$.success false
                 (seq
                  (new $array-inline
                   (seq
                    (seq
                     (ap "Failed to resolve subnet: " $array-inline)
                     (ap ret-0.$.error $array-inline)
                    )
                    (canon %init_peer_id% $array-inline  #array-inline-0)
                   )
                  )
                  (call %init_peer_id% ("run-console" "print") [#array-inline-0])
                 )
                )
                (new $-hop-
                 (new #-hopc-
                  (canon -relay- $-hop-  #-hopc-)
                 )
                )
               )
               (seq
                (seq
                 (ap :error: -if-error-)
                 (xor
                  (seq
                   (match :error:.$.error_code 10001
                    (null)
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (fail -if-error-)
                 )
                )
                (new $-hop-
                 (new #-hopc-
                  (canon -relay- $-hop-  #-hopc-)
                 )
                )
               )
              )
             )
            )
            (ap ret-0.$.workers ret-0_flat)
           )
           (fold ret-0_flat w-0
            (par
             (xor
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (new $-hop-
                       (new #-hopc-
                        (canon -relay- $-hop-  #-hopc-)
                       )
                      )
                      (new $-hop-
                       (new #-hopc-
                        (canon w-0.$.host_id $-hop-  #-hopc-)
                       )
                      )
                     )
                     (call w-0.$.worker_id.[0] ("cioVault" "dir") ["testdir"] ret-1)
                    )
                    (call w-0.$.worker_id.[0] ("cioVault" "write") ["hello trisolaris" ret] ret-2)
                   )
                   (call w-0.$.worker_id.[0] ("cioVault" "inspect") ["testdir"] ret-3)
                  )
                  (ap ret-3 $res)
                 )
                 (new $-hop-
                  (new #-hopc-
                   (canon w-0.$.host_id $-hop-  #-hopc-)
                  )
                 )
                )
                (new $-hop-
                 (new #-hopc-
                  (canon -relay- $-hop-  #-hopc-)
                 )
                )
               )
               (new $-hop-
                (new #-hopc-
                 (canon %init_peer_id% $-hop-  #-hopc-)
                )
               )
              )
              (seq
               (seq
                (seq
                 (new $-hop-
                  (new #-hopc-
                   (canon w-0.$.host_id $-hop-  #-hopc-)
                  )
                 )
                 (new $-hop-
                  (new #-hopc-
                   (canon -relay- $-hop-  #-hopc-)
                  )
                 )
                )
                (new $-hop-
                 (new #-hopc-
                  (canon %init_peer_id% $-hop-  #-hopc-)
                 )
                )
               )
               (fail :error:)
              )
             )
             (next w-0)
            )
            (never)
           )
          )
          (null)
         )
        )
        (new $res_test
         (seq
          (seq
           (fold $res res_fold_var
            (seq
             (seq
              (ap res_fold_var $res_test)
              (canon %init_peer_id% $res_test  #res_iter_canon)
             )
             (xor
              (match #res_iter_canon.length 3
               (null)
              )
              (next res_fold_var)
             )
            )
            (never)
           )
           (canon %init_peer_id% $res_test  #res_result_canon)
          )
          (ap #res_result_canon res_gate)
         )
        )
       )
       (canon %init_peer_id% $res  #res_canon)
      )
      (fold #res_canon rr-0
       (seq
        (fold rr-0 r-0
         (seq
          (call %init_peer_id% ("run-console" "print") [r-0])
          (next r-0)
         )
         (null)
        )
        (next rr-0)
       )
       (null)
      )
     )
     (call %init_peer_id% ("callbackSrv" "response") [true])
    )
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type TestParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type TestResult = Promise<boolean>;

export function test(...args: TestParams): TestResult {
    return callFunction$$(
        args,
        {
    "functionName": "test",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        test_script
    );
}
