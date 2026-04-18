import { Project } from ".";
import { DLKaggleDemo } from "../../assets/demos";
import { HuggingFaceIcon, PythonIcon, PytorchIcon } from "../../assets/icons";
import { DLKaggleThumbnail } from "../../assets/thumbnails";
import { InTextAnchor } from "../../components/InTextAnchor";

const DLKaggle: Project = {
  thumbnail: DLKaggleThumbnail,
  title: "Deep Learning Object Detection Kaggle Competition",
  client: "Monash University - FIT5215",
  blurb:
    "I came first place in our Deep Learning unit's Kaggle competition where we had to build a model to classify images across 1000 different categories.",
  route: "dl-kaggle",
  demo: DLKaggleDemo,
  about: (
    <>
      <p>
        This was my first major AI project during my Masters of AI at Monash
        University. It was for a Deep Learning unit (FIT5215) which was my first
        introduction to any sort of AI models including NNs, CNNs, RNNs, GANs,
        diffusion models, and transformers. This competition was part of our
        first assignment, and was a way for us to earn bonus points for our
        final mark. Given my competitive nature, I ended up spending way too
        much time on this competition, but was rewarded as I was able to get
        first place as well as learn a lot about practical applications of AI.
      </p>
      <p>
        My first attempt at building a model was to finetune Convolutional
        Neural Networks (CNNs) on the Kaggle dataset. I was only able to get
        around 80% accuracy even after applying different data augmentation
        techniques and methods that I would read about in the literature such as
        ensembling. With just CNNs, I still was far from the top of the
        leaderboard.
      </p>
      <p>
        I finally decided to try and use a Transformer model which I was
        initially intimidated by as we had not yet covered it in class. But I
        was soon able to crack into the top 10 of the leaderboard by finetuning
        the classification head of pre-trained vision transformers available on
        Hugging Face. After combining this with some of my earlier techniques, I
        was finally in the top 5, getting accuracies in the high 90s.
      </p>
      <p>
        Despite the success of my vision transformers, I was still curious
        whether it was possible to get an accuracy of 100%. I decided that the
        only way this would be possible was to increase my training data. After
        doing some manual data exploration on the provided training dataset, I
        looked for other datasets that I thought might be of a similar
        distribution to the Kaggle dataset. After finetuning on these new
        datasets, I got my first accuracy above 98%.
      </p>
      <p>
        Still dissatisfied, I tried a final technique inspired by Google Lens.
        This involved using a pretrained transformer model to generate an
        embedding for each image in the dataset. For prediction, I then used the
        same model to generate an embedding for the test image and compared its
        cosine similarity to the embeddings of the images in the dataset. While
        this was a much slower technique, it was able to achieve a perfect
        accuracy of 100%, suggesting that my training data likely came from the
        same source as the test data.
      </p>
    </>
  ),
  techSheet: ["Python", "Pytorch", "Hugging Face"],
  resources: [
    <>
      View the leaderboard on
      <InTextAnchor
        href="https://www.kaggle.com/competitions/fit-5215-object-detection-s-2-2024/leaderboard"
        text="Kaggle."
      />
    </>,
  ],
  languages: [PythonIcon, PytorchIcon, HuggingFaceIcon],
  date: "September 2024",
};

export default DLKaggle;
