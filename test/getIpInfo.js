import assert from "assert";
import nock from 'nock';
import {Client} from "../src/index";

describe('get ip info response', () => {
    it('it should send a get request that will return currency rates', async () => {
        nock('https://api.clearip.io')
            .get(`/ip/54.144.220.0/json`)
            .query({
                apikey: "api key here"
            })
            .reply(200, {
                country: "United States",
                continent: "Americas"
            });

        const clearIpClient = new Client("api key here");

        const response = await clearIpClient.Ipinfo.getIpInfo("54.144.220.0");

        assert.deepStrictEqual(response, {
            country: "United States",
            continent: "Americas"
        });

    });

    it('it should reject when no ip', async () => {
        nock('https://api.clearip.io')
            .get(`/ip/54.144.220.0/json`)
            .query({
                apikey: "api key here"
            })
            .reply(200, {
                country: "United States",
                continent: "Americas"
            });

        const clearIpClient = new Client("api key here");

        await assert.rejects(
            async () => {
                await clearIpClient.Ipinfo.getIpInfo("")
            }, {
                name: 'Error',
                message: 'ip is required'
            }
        );

    });

});