"use strict";
/**
 * UnitTest
 */
let description = {
    name: "UnitName"
}
let Unit = require("../Unit/logic.js");
let assert = require("assert");
let ISIO = require("isio");
let is = new ISIO();
is.null.c;
/**
 * Testing - your code below
 */
describe(`<${description.name}>`, ()=>{
    describe(`${is.i.z.z.c} [General]`, ()=>{
        before(()=>{});
        after(()=>{});
        /** Accessability */
        describe(`${is.i.o.c} (Accessability)`, ()=>{
            // it(`${is.i.c} CertainFeatureTemplate`, ()=>{});
            it(`${is.i.c} New Instance`, ()=>{
                let unit = new Unit();
            });
        });
        
    });
    describe(`${is.i.z.z.c} [DomainSpecificLogic]`, ()=>{
        before(()=>{});
        after(()=>{});
        /** (Action-State) group of test mean: when you invoke some method -> state of the object will change */
        describe(`${is.i.o.c} (Action-State)`, ()=>{
            // it(`${is.i.c} CertainFeatureTemplate`, ()=>{});
        });
        /** 
         * (Action-Reaction) group of test mean: when you invoke some method -> some another method or event will appear
         * Emitter/Events test
         */
        describe(`${is.i.o.c} (Action-Reaction)`, ()=>{
            // it(`${is.i.c} CertainFeatureTemplate`, ()=>{});
        });
        /** LogicSpecific */
        describe(`${is.i.o.c} (LogicSpecific)`, ()=>{
            // it(`${is.i.c} CertainFeatureTemplate`, ()=>{});
        });
    });
});