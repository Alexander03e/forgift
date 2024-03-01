import React from "react";
export const ColorfulWord = React.memo(({ word, size }) => {
  const wordArr = Array.from(word);
  const colors = [
    "#FF5733",
    "#FFC300",
    "#FF33FF",
    "#33FFEC",
    "#3366FF",
    "#33FF57",
    "#FF33B8",
    "#B833FF",
    "#FF5733",
    "#FFC300",
    "#33FFEC",
    "#3366FF",
    "#33FF57",
    "#FF33B8",
    "#B833FF",
    "#FF5733",
    "#FFC300",
    "#33FFEC",
    "#3366FF",
    "#33FF57",
    "#FF33B8",
    "#B833FF",
    "#FF5733",
    "#FFC300",
    "#33FFEC",
    "#3366FF",
    "#33FF57",
    "#FF33B8",
    "#B833FF",
    "#FF5733",
  ];
  let shuffledColors = [...colors];
  shuffledColors.sort(() => Math.random() - 0.5);

  return (
    <>
      <h3 style={{ fontSize: `${size}px` }}>
        {wordArr?.map((item, i) => {
          const color = shuffledColors[i % colors.length]; // Используем цвет по модулю относительно длины массива цветов

          return (
            <span key={i} style={{ color }}>
              {item}
            </span>
          );
        })}
      </h3>
    </>
  );
});

ColorfulWord.displayName = "ColorfulWord";
