import express, { Request, Response } from 'express';
import { body } from 'express-validator'
import { InterestDescription, validateRequest } from '@cuconnex/common'




const router = express.Router();



const bodyChecker = [body('interests')
    .not()
    .isEmpty()
    .isArray()
    .custom((input: string[]) => {
        // find first element in the input array that does not has
        // value specify in InterestDescription
        const result = input.find(int => !(Object.values(InterestDescription) as string[]).includes(int))

        // expect result to be undefined so the process continue
        return result === undefined;
    })
    .withMessage('Valid interest must be provided')
];

// create user for first time login
router.post('/api/users', bodyChecker, validateRequest, async (req: Request, res: Response) => {

});


export { router as newUserRouter };

