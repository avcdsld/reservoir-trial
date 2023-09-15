import { createClient, paths } from "@reservoir0x/reservoir-sdk";

const client = createClient({
    chains: [{
        id: 1,
        baseApiUrl: 'https://api.reservoir.tools',
        active: true,
        apiKey: "55825bd6-badf-5f0f-9124-dbe1d5fc5ef7"
    }],
    source: "reservoir.market"
});
console.log({ client });

async function execute() {
    const res = await fetch('https://api.reservoir.tools/tokens/v5?limit=20&collection=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d');
    const data = (await res.json());

    const response = data as paths['/tokens/v5']['get']['responses']['200']['schema'];
    console.log(response.tokens![0]?.market);
}

execute();
