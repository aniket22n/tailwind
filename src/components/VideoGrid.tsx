import { faker } from "@faker-js/faker";
import { VideoCard } from "./VideoCard";

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-8">
      {videos.map((video) => (
        <VideoCard
          thubImage={video.thubImage}
          image={video.image}
          title={video.title}
          channel={video.channel}
          views={video.views}
          upload={video.upload}
        />
      ))}
    </div>
  );
};

// data

function views() {
  const views = faker.number.int();
  if (views < 999) return views + " views";
  else if (views < 999999 && views >= 999) return (views % 1000) + "K views";
  else return (views % 999) + "M views";
}

function upload() {
  const upload = faker.number.int();
  if (upload < 24) return upload + " hourse ago";
  else if (upload < 365 && upload >= 24) return upload + " days ago";
  else return (upload % 15) + " years ago";
}

const videos = [
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
  {
    thubImage: faker.image.urlPicsumPhotos(),
    image: faker.image.avatar(),
    title: faker.lorem.text().slice(0, 20) + "..",
    channel: faker.person.fullName() + "",
    views: views(),
    upload: upload(),
  },
];
