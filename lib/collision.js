export function collisionDetection() {
    for (var col = 0; col < enemyColumnCount; col++) {
        for (var row = 0; row < enemyRowCount; row++) {
            var enemy = enemies[col][row];
            if (enemy.status == 1) {
                if (x > enemy.x && y > enemy.y && x < (enemy.x + enemyWidth) && y < enemy.y + enemyHeight) {
                    dy = -dy;
                    enemy.status = 0;
                }
            }
        }
    }
}