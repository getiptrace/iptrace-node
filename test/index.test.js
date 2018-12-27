import assert from "assert";
import {Client} from "../src/index";

describe('CurrencyStack client', () => {

    it('client constructor should throw an error when api is undefined', () => {

        assert.throws(
            () =>
            new Client(''),
            Error("api key is required")
        );

    });


});