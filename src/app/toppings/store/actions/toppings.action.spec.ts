import * as fromToppings from './toppings.action';

describe('Toppings Actions', () => {
    describe('loadToppings Actions', () => {
        describe('loadToppings', () => {
            it('should create an action', () => {
                const action = fromToppings.ToppingsAction.loadToppings();

                expect({ ...action }).toEqual({
                    type: fromToppings.LOAD_TOPPINGS
                });
            });
        });
        describe('loadToppingsFail', () => {
            it('should create an action', () => {
                const payload = { payload: 'Load Error '};
                const action = fromToppings.ToppingsAction.loadToppingsFail(payload);

                expect({ ...action }).toEqual({
                  type: fromToppings.LOAD_TOPPINGS_FAIL,
                  payload
                });
            });
        });
        // describe('loadToppingsSuccess', () => {
        //     it('should create an action', () => {
        //         const payload = {
        //           payload: [
        //             {
        //               "id": 1,
        //               "name": "anchovy"
        //             },
        //             {
        //               "id": 2,
        //               "name": "bacon"
        //             },
        //             {
        //               "id": 3,
        //               "name": "basil"
        //             },
        //             {
        //               "id": 4,
        //               "name": "chili"
        //             },
        //             {
        //               "id": 5,
        //               "name": "mozzarella"
        //             },
        //             {
        //               "id": 6,
        //               "name": "mushroom"
        //             },
        //             {
        //               "id": 7,
        //               "name": "olive"
        //             },
        //             {
        //               "id": 8,
        //               "name": "onion"
        //             },
        //             {
        //               "id": 9,
        //               "name": "pepper"
        //             },
        //             {
        //               "id": 10,
        //               "name": "pepperoni"
        //             },
        //             {
        //               "id": 11,
        //               "name": "sweetcorn"
        //             },
        //             {
        //               "id": 12,
        //               "name": "tomato"
        //             }
        //         ]
        //       };
        //       const action = fromToppings.ToppingsAction.loadToppingsSuccess(payload);

        //       expect({ ...action }).toEqual({
        //           type: fromToppings.LOAD_TOPPINGS_SUCCESS,
        //           payload
        //       });
        //     });
        // });
    });

    // describe('VisualiseToppings Actions', () => {
    //     describe('VisualiseToppings', () => {
    //         it('should create an action', () => {
    //           const payload = {
    //             payload: [1, 2, 3]
    //           };

    //           const action = fromToppings.ToppingsAction.visualiseToppings(payload);

    //           expect({ ...action }).toEqual({
    //             payload,
    //             type: fromToppings.VISUALISE_TOPPINGS
    //           });
    //         })
    //     });
    // });
});
