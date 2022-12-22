import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.comment.deleteMany();

  const alice = await prisma.user.create({
    data: {
      name: "Alice",
    },
  });
  const bob = await prisma.user.create({
    data: {
      name: "Bob",
    },
  });
  const post1 = await prisma.post.create({
    data: {
      title: "Hello World",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat urna vel ante volutpat, ut elementum mi placerat. Phasellus varius nisi a nisl interdum, at ultrices ex tincidunt. Duis nec nunc vel urna ullamcorper eleifend ac id dolor. Phasellus vitae tortor ac metus laoreet rutrum. Aenean condimentum consequat elit, ut placerat massa mattis vitae. Vivamus dictum faucibus massa, eget euismod turpis pretium a. Aliquam rutrum rhoncus mi, eu tincidunt mauris placerat nec. Nunc sagittis libero sed facilisis suscipit. Curabitur nisi lacus, ullamcorper eu maximus quis, malesuada sit amet nisi. Proin dignissim, lacus vitae mattis fermentum, dui dolor feugiat turpis, ut euismod libero purus eget dui",
      userId: alice.id,
    },
  });
  const post2 = await prisma.post.create({
    data: {
      title: "Hello World 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat urna vel ante volutpat, ut elementum mi placerat. Phasellus varius nisi a nisl interdum, at ultrices ex tincidunt. Duis nec nunc vel urna ullamcorper eleifend ac id dolor. Phasellus vitae tortor ac metus laoreet rutrum. Aenean condimentum consequat elit, ut placerat massa mattis vitae. Vivamus dictum faucibus massa, eget euismod turpis pretium a. Aliquam rutrum rhoncus mi, eu tincidunt mauris placerat nec. Nunc sagittis libero sed facilisis suscipit. Curabitur nisi lacus, ullamcorper eu maximus quis, malesuada sit amet nisi. Proin dignissim, lacus vitae mattis fermentum, dui dolor feugiat turpis, ut euismod libero purus eget dui",
      userId: alice.id,
    },
  });
  const comment1 = await prisma.comment.create({
    data: {
      message: "I am a root comment",
      userId: alice.id,
      postId: post1.id,
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      parentId: comment1.id,
      message: "I am a nested comment",
      userId: bob.id,
      postId: post1.id,
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      message: "I am another root comment",
      userId: alice.id,
      postId: post1.id,
    },
  });
}
