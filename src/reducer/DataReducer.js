import { cuisineData, restaurantsData } from "../contants";

const getAvgRating = (totalAvg, avglength, avg) => {
  const newavg = totalAvg * avglength;
  const newAvgTotal = Number(newavg) + Number(avg);

  return (Number(newAvgTotal) / Number(avglength + 1)).toFixed(1);
};

export const initialState = {
  cuisineData: cuisineData,
  restaurantsData: restaurantsData,
  selectedRestaurants: "",
  isModalOpen: false,
  user: {
    revName: "Ashok",
    pp: "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-4_tlvldl.png",
  },
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "selectCuisine": {
      const cuisineTypeId = state.cuisineData?.find((cuisineItem) => {
        return cuisineItem?.name === action?.payload;
      }).id;

      return {
        ...state,
        selectedRestaurants: state.restaurantsData?.find(
          (restItem) => restItem?.cuisine_id === cuisineTypeId
        ),
      };
    }

    case "AddRating": {
      return {
        ...state,
        restaurantsData: state.restaurantsData?.map((restItem) => {
          return restItem?.id === state?.selectedRestaurants.id
            ? {
                ...restItem,
                ratings: [...restItem?.ratings, { ...action.payload }],
                averageRating: getAvgRating(
                  restItem?.averageRating,
                  restItem?.ratings.length,
                  action?.payload.rating
                ),
              }
            : restItem;
        }),
        selectedRestaurants: {
          ...state?.selectedRestaurants,
          ratings: [
            ...state?.selectedRestaurants?.ratings,
            { ...action?.payload },
          ],
          averageRating: getAvgRating(
            state?.selectedRestaurants?.averageRating,
            state?.selectedRestaurants?.ratings.length,
            action.payload?.rating
          ),
        },
        isModalOpen: false,
      };
    }

    case "OpenModal": {
      return {
        ...state,
        isModalOpen: true,
      };
    }

    case "CloseModal": {
      return {
        ...state,
        isModalOpen: false,
      };
    }

    default:
      return state;
  }
};
