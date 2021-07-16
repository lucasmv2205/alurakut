import { SiteClient } from 'datocms-client';

export default async function (request, response) {

    if (request.method === 'POST') {
        const TOKEN_FULL = '0ba5428f5774c2b5df6ade2be511df';

        const client = new SiteClient(TOKEN_FULL);

        const typeCommunityId = '971886';

        const createdRecord = await client.items.create({
            itemType: typeCommunityId,
            ...request.body,
        });

        response.json({
            record: createdRecord,
        });

        return;
    }

    response.status(404).json({
        message: "Error",
    })
}