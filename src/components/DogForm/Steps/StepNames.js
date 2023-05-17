import Icon from "../../../assets/custom-dog/icons";

export const StepNames = {
  2: {
    btnData: {
      active: (
        <span>
          <Icon icon="tail-wag" width="45px" /> <span>Body</span>
        </span>
      ),
      default: (
        <span>
          <Icon icon="tail" width="45px" /> <span>Body</span>
        </span>
      ),
    },
    name: "Body",
  },
  3: {
    btnData: {
      active: (
        <span>
          <Icon icon="eye-open" width="45px" /> <span>Eyes</span>
        </span>
      ),
      default: (
        <span>
          <Icon icon="eye-closed" width="45px" /> <span>Eyes</span>
        </span>
      ),
    },
    name: "Eyes",
  },
  4: {
    btnData: {
      active: (
        <span>
          <Icon icon="snout-tongue" width="45px" /> <span>Snout</span>
        </span>
      ),
      default: (
        <span>
          <Icon icon="snout" width="45px" /> <span>Snout</span>
        </span>
      ),
    },
    name: "Snout",
  },
  1: {
    btnData: {
      active: (
        <span>
          <Icon icon="collar" width="45px" /> <span>Info</span>
        </span>
      ),
      default: (
        <span>
          <Icon icon="collar" width="45px" /> <span>Info</span>
        </span>
      ),
    },
    name: "Info",
  },
};
